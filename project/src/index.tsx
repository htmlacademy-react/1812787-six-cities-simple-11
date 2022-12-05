import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { hotels } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { nearbyHotels } from './mocks/nearby-offers';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App
        hotels = { hotels }
        reviews = { reviews }
        nearbyHotels = { nearbyHotels }
      />
    </Provider>
  </React.StrictMode>,
);
