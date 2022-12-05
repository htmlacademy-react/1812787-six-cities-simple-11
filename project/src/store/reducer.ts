import {createReducer} from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { changeCity, getOffers } from './action';
import { hotels } from '../mocks/offers';

const initialState = {
  city: CITIES[0],
  offers: hotels,
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
    });
});

export {reducer};
