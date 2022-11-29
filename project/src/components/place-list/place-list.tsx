import PlaceCard from '../../components/place-card/place-card';
import type { Hotel } from '../../types/hotels';

type ListProps = {
  hotels: Hotel[];
  onListItemHover: (listItemID: number | null) => void;
}

function PlaceList(props: ListProps): JSX.Element{
  const {hotels, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map((hotel) => (
          <article className="cities__card place-card" key={hotel.id}
            onMouseEnter = { () => onListItemHover(hotel.id) }
            onMouseLeave = { () => onListItemHover(null) }
          >
            <PlaceCard hotel = {hotel} />
          </article>
        ))
      }
    </div>
  );
}

export default PlaceList;
