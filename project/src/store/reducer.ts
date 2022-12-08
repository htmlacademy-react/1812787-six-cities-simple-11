import {createReducer} from '@reduxjs/toolkit';
import { CITIES, SORTING_OPTIONS, AuthorizationStatus } from '../const';
import { changeCity, getOffers, changeSorting, setOffersDataLoadingStatus, requireAuthorization, setUserEmail } from './action';
import { Hotel } from '../types/hotels';

type InitialState = {
  city: string;
  offers: Hotel[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  sorting: string;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  sorting: SORTING_OPTIONS.Popular as string,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(getOffers, (state, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
