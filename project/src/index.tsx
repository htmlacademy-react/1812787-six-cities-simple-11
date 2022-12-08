import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import { reviews } from './mocks/reviews';
import { nearbyHotels } from './mocks/nearby-offers';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <ToastContainer />
      <App
        reviews = { reviews }
        nearbyHotels = { nearbyHotels }
      />
    </Provider>
  </React.StrictMode>,
);
