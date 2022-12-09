import {createReducer} from '@reduxjs/toolkit';
import { CITIES, SORTING_OPTIONS, AuthorizationStatus } from '../const';
import { changeCity, getOffers, getProperty, getReviews, getNearbyOffers, changeSorting, setOffersDataLoadingStatus, requireAuthorization, setUserEmail } from './action';
import { Hotel, Review } from '../types/hotels';

type InitialState = {
  city: string;
  offers: Hotel[];
  property: Hotel | null;
  reviews: Review[];
  nearbyOffers: Hotel[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  sorting: string;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  property: null,
  reviews: [],
  nearbyOffers: [],
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
    .addCase(getProperty, (state, action) => {
      const { property } = action.payload;
      state.property = property;
    })
    .addCase(getReviews, (state, action) => {
      const { reviews } = action.payload;
      state.reviews = reviews;
    })
    .addCase(getNearbyOffers, (state, action) => {
      const { nearbyOffers } = action.payload;
      state.nearbyOffers = nearbyOffers;
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
