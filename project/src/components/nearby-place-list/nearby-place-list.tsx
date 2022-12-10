import NearbyPlaceCard from '../nearby-place-card/nearby-place-card';
import type { Hotel } from '../../types/hotels';

type NearbyListProps = {
  nearbyHotels: Hotel[];
}

function NearbyPlaceList (props: NearbyListProps): JSX.Element {
  const {nearbyHotels} = props;

  return (
    <div className="near-places__list places__list">
      {
        nearbyHotels.map((nearbyHotel) => (
          <article className="near-places__card place-card" key = {nearbyHotel.id}>
            <NearbyPlaceCard
              nearbyHotel = { nearbyHotel }
            />
          </article>
        ))
      }
    </div>
  );
}

export default NearbyPlaceList;
