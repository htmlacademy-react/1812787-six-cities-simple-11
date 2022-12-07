import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOffers, setOffersDataLoadingStatus } from './action';
import { AppDispatch, State } from '../types/state.js';
import { Hotel } from '../types/hotels';
import { APIRoute } from '../const';

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
