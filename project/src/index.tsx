import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { nearbyHotels } from './mocks/nearby-offers';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App
        reviews = { reviews }
        nearbyHotels = { nearbyHotels }
      />
    </Provider>
  </React.StrictMode>,
);
