/* eslint-disable jsx-a11y/img-redundant-alt */
import type { HotelProps } from '../../types/hotels';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import { memo } from 'react';


function PlaceCard( { hotel }: HotelProps): JSX.Element {
  const { previewImage, price, title, type, rating, isPremium, id } = hotel;
  const ratingPercent = (Math.round(rating) / 5) * 100;
  return (
    <>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room.replace(':id', `${id}`)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent.toString()}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room.replace(':id', `${id}`)}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default memo(
  PlaceCard,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.hotel) === JSON.stringify(nextProps.hotel)
);
