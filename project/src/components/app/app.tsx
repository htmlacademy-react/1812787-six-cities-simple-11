import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { Hotel, Review } from '../../types/hotels';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  hotels: Hotel[];
  reviews: Review[];
  nearbyHotels: Hotel[];
}

function App({hotels, reviews, nearbyHotels}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {
            <MainScreen
              hotels = { hotels }
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen/>}
        />
        <Route
          path={AppRoute.Room}
          element = {
            <PropertyScreen
              hotels = { hotels }
              reviews = { reviews }
              nearbyHotels = { nearbyHotels }
            />
          }
        />
        <Route
          path='*'
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
