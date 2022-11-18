import React, { useState } from 'react';
import PlaceCard from '../../components/place-card/place-card';
import type { Hotels, Hotel } from '../../types/hotels';

function PlaceList({hotels}: Hotels): JSX.Element{
  //временно отключена проверка неиспользуемой переменной
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoverCard, setHovered] = useState<Hotel | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map((hotel) => (
          <article className="cities__card place-card" key={hotel.id}
            onMouseEnter = { () => setHovered(hotel) }
            onMouseLeave = { () => setHovered(null) }
          >
            <PlaceCard hotel = {hotel} />
          </article>
        ))
      }
    </div>
  );
}

export default PlaceList;
