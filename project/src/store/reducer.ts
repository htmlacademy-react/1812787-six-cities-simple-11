import {createReducer} from '@reduxjs/toolkit';
import { CITIES, SORTING_OPTIONS } from '../const';
import { changeCity, getOffers, changeSorting } from './action';
import { hotels } from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: hotels,
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
    .addCase(changeSorting, (state, action) => {
      const { sorting } = action.payload;
      state.sorting = sorting;
    });
});

export {reducer};
