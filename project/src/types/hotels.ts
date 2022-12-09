export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: Location;
  name: string;
};

export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Hotel = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type ReviewData = {
  comment: string;
  rating: number;
  hotelId: number;
};

export type Hotels = {
  hotels: Hotel[];
}

export type HotelProps = {
  hotel: Hotel;
};

export type MapProps = {
  locations: Location[];
  city: City;
  selectedPoint: Location | undefined;
  mapClass: string;
};
