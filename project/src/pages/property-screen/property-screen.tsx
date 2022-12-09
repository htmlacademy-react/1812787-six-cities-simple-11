/* eslint-disable jsx-a11y/img-redundant-alt */
import {useParams} from 'react-router-dom';
import {MAP_CLASS, AuthorizationStatus} from '../../const';
import AddCommentForm from '../../components/add-comment-form/add-comment-form';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import NearbyPlaceList from '../../components/nearby-place-list/nearby-place-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import {fetchPropertyAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function PropertyScreen (): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const hotel = useAppSelector((state) => state.property);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyHotels = useAppSelector((state) => state.nearbyOffers);
  const nearbyPoints = nearbyHotels.map((nearbyHotel) => nearbyHotel.location);

  useEffect(() => {
    dispatch(fetchPropertyAction(String(id)));
  }, [dispatch, id]);

  if (isDataLoading) {
    return <LoadingScreen/>;
  }

  return hotel ? (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                hotel.images.map((image) =>
                  (
                    <div className="property__image-wrapper" key={`${hotel.id}-${image}-${Math.random()}`}>
                      <img className="property__image" src={image} alt="Photo studio"/>
                    </div>
                  ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {hotel.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : '' }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotel.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${((Math.round(hotel.rating) / 5) * 100).toString()}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotel.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel.bedrooms === 1 ? `${hotel.bedrooms} Bedroom` : `${hotel.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {hotel.maxAdults === 1 ? `Max ${hotel.maxAdults} adult` : `Max ${hotel.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotel.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {
                hotel.goods.length === 0 ? (
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <div className="property__description">
                      <p className="property__text">
                        There is no information about it.
                      </p>
                    </div>
                  </div>
                ) :
                  (
                    <div className="property__inside">
                      <h2 className="property__inside-title">What&apos;s inside</h2>
                      <ul className="property__inside-list">
                        {
                          hotel.goods.map((good) =>
                            (
                              <li className="property__inside-item" key={`${hotel.id}-${good}`}>
                                {good}
                              </li>
                            ))
                        }
                      </ul>
                    </div>
                  )
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={hotel.host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                    <img className="property__avatar user__avatar" src={hotel.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {hotel.host.name}
                  </span>
                  {
                    hotel.host.isPro ? (
                      <span className="property__user-status">
                        Pro
                      </span>
                    ) : ''
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {hotel.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  reviews = { reviews }
                />
                {isAuthorized ? (
                  <AddCommentForm
                    hotelId = {hotel.id}
                  />
                ) : (
                  ''
                )}
              </section>
            </div>
          </div>
          <Map
            locations = { nearbyPoints }
            city = { hotel.city }
            selectedPoint = { hotel.location }
            mapClass = {MAP_CLASS.property}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearbyPlaceList
              nearbyHotels = { nearbyHotels }
            />
          </section>
        </div>
      </main>
    </div>
  ) : (
    <NotFoundScreen/>
  );
}

export default PropertyScreen;
