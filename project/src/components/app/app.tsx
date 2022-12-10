import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return(
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {
            <MainScreen/>
          }
        />
        <Route
          path={AppRoute.Login}
          element = {<LoginScreen/>}
        />
        <Route
          path={AppRoute.Room}
          element = {
            <PropertyScreen/>
          }
        />
        <Route
          path='*'
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
