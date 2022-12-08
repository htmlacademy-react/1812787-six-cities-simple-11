import { createAction } from '@reduxjs/toolkit';
import { Hotel } from '../types/hotels';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<{
  city: string;
}>('city/changeCity');

export const getOffers = createAction<{
  offers: Hotel[];
}
>('offer/getOffers');

export const setOffersDataLoadingStatus = createAction<boolean
>('data/setOffersDataLoadingStatus');

export const changeSorting = createAction<{
  sorting: string;
}>('offer/sortOffers');

export const requireAuthorization = createAction<AuthorizationStatus
>('user/requireAuthorization');

export const setUserEmail = createAction<string | null>('user/setUserEmail');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
