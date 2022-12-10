export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Root = '/',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const NEARBY_OFFERS_COUNT = 3;

export const REVIEWS_MAX_COUNT = 10;

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;

export const MAX_PROPERTY_IMAGES_COUNT = 6;

export const PASSWORD_VALIDATION_ERROR = 'Password must contain 1 letter and 1 number';

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

export const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export enum SORTING_OPTIONS {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export enum APIRoute {
  Hotels = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
