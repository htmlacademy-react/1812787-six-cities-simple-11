/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import type { Hotel } from '../../types/hotels';
import { countRatingPercent } from '../../utils/rating';

type NearbyPlaceProps = {
  nearbyHotel: Hotel;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
};

function NearbyPlaceCard({nearbyHotel}: NearbyPlaceProps): JSX.Element {
  const { previewImage, price, title, type, rating, isPremium, id } = nearbyHotel;

  return (
    <>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="near-places__image-wrapper place-card__image-wrapper" onClick={scrollToTop}>
        <Link to={AppRoute.Room.replace(':id', `${id}`)}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info" onClick={scrollToTop}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: countRatingPercent(rating) }}></span>
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

export default NearbyPlaceCard;

