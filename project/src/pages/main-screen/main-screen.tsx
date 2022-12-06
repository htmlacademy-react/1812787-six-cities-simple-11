import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, MAP_CLASS, CITIES, SORTING_OPTIONS } from '../../const';
import PlaceList from '../../components/place-list/place-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import SortingOptions from '../../components/sorting-options/sorting-options';
import type { Hotel } from '../../types/hotels';
import { useAppSelector } from '../../hooks';

function MainScreen(): JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sorting = useAppSelector((state) => state.sorting);
  const sortOffers = (sort: string, hotels: Hotel[]) => hotels.sort((a, b) => {
    switch (sort) {
      case SORTING_OPTIONS.PriceLowToHigh:
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      case SORTING_OPTIONS.PriceHighToLow:
        if (a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      case SORTING_OPTIONS.TopRatedFirst:
        if (a.rating < b.rating) {
          return 1;
        } else if (a.rating > b.rating) {
          return -1;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  });
  const cityOffers = sortOffers(sorting, offers.filter((offer) => offer.city.name === currentCity));
  const isEmpty = cityOffers.length === 0;

  const onListItemHover = (listItemID: number | null) => {
    if (listItemID !== null) {
      const currentHotel = cityOffers.find((cityOffer) => cityOffer.id === listItemID);
      setSelectedHotel(currentHotel);
    } else {
      setSelectedHotel(undefined);
    }
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={ !isEmpty ? 'page__main page__main--index' : 'page__main page__main--index page__main--index-empty'}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList
          cities = {CITIES}
        />
        {
          !isEmpty ? (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                  <SortingOptions
                    sorting = {sorting}
                  />
                  <PlaceList
                    hotels = { cityOffers }
                    onListItemHover = {onListItemHover}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    locations = { cityOffers.map((cityOffer) => cityOffer.location) }
                    city = { cityOffers[0].city }
                    selectedPoint = {selectedHotel?.location}
                    mapClass = {MAP_CLASS.cities}
                  />
                </div>
              </div>
            </div>
          ) : <MainEmpty currentCity = {currentCity} />
        }
      </main>
    </div>
  );
}

export default MainScreen;
