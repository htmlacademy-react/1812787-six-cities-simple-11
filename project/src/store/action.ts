import { createAction } from '@reduxjs/toolkit';
import { Hotel } from '../types/hotels';

export const changeCity = createAction<{
    city: string;
}>('city/changeCity');

export const getOffers = createAction<{
  offers: Hotel[];
}
>('offer/getOffers');
