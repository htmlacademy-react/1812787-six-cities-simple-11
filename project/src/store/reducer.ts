import {createReducer} from '@reduxjs/toolkit';
import { CITIES, SORTING_OPTIONS } from '../const';
import { changeCity, getOffers, changeSorting, setOffersDataLoadingStatus } from './action';
import { Hotel } from '../types/hotels';

type InitialState = {
  city: string;
  offers: Hotel[];
  isOffersDataLoading: boolean;
  sorting: string;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  isOffersDataLoading: false,
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
    .addCase(changeSorting, (state, action) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
