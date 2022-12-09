import { AxiosInstance, AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOffers, requireAuthorization, setOffersDataLoadingStatus, setUserEmail, redirectToRoute, getProperty, getReviews, getNearbyOffers } from './action';
import { AppDispatch, State } from '../types/state.js';
import { Hotel, Review, ReviewData } from '../types/hotels';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(getOffers({
      offers: data
    }));
  },
);

export const fetchPropertyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProperty',
  async (id, {dispatch, extra: api}) => {
    // dispatch(setOffersDataLoadingStatus(true));
    const propertyData = await api.get<Hotel>(`${APIRoute.Hotels}/${id}`);
    const nearbyData = await api.get<Hotel[]>(`${APIRoute.Hotels}/${id}/nearby`);
    const commentsData = await api.get<Review[]>(`${APIRoute.Reviews}/${id}`);
    dispatch(getProperty ({
      property: propertyData.data
    }));
    dispatch(getNearbyOffers({
      nearbyOffers: nearbyData.data
    }));
    dispatch(getReviews({
      reviews: commentsData.data
    }));
    // dispatch(setOffersDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data: {email: userEmail}}: AxiosResponse<UserData> = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserEmail(userEmail));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(setUserEmail(null));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserEmail(null));
  },
);

export const postReview = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReview',
  async({ hotelId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<Review>(`${APIRoute.Reviews}/${hotelId}`, {
      comment,
      rating
    });
    const comments = await api.get<Review[]>(`${APIRoute.Reviews}/${hotelId}`);
    dispatch(getReviews({
      reviews: comments.data
    }));
  }
);
