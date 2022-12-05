import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, MAP_CLASS, CITIES } from '../../const';
import PlaceList from '../../components/place-list/place-list';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import MainEmpty from '../../components/main-empty/main-empty';
import type { Hotel } from '../../types/hotels';
import { useAppSelector} from '../../hooks';

function MainScreen(): JSX.Element {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>(undefined);
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const cityOffers = offers.filter((offer) => offer.city.name === currentCity);
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
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                  Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
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
