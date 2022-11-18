import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import type { Hotel, Comment } from '../../types/hotels';

import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  hotels: Hotel[];
  comments: Comment[];
}

function App({hotels, comments}: AppScreenProps): JSX.Element {
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
