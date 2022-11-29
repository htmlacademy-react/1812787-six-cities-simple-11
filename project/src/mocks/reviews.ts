import { Review } from '../types/hotels';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    id: 1000,
    rating: 4.8,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 333,
      isPro: true,
      name: 'Angela',
    },
  },
  {
    comment: 'Nice!',
    date: 'March 2020',
    id: 2000,
    rating: 4.4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 222,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: 'May 2021',
    id: 3000,
    rating: 2.8,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 222,
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment: 'OK',
    date: 'June 2019',
    id: 4000,
    rating: 4.9,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 333,
      isPro: false,
      name: 'Angela',
    },
  }
];
