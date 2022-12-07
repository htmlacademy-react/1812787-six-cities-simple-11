export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Root = '/',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const NEARBY_OFFERS_COUNT = 3;

export const MAP_CLASS = {
  cities: 'cities__map map',
  property: 'property__map map',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum SORTING_OPTIONS {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}
