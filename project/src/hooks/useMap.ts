import {useEffect, useState, MutableRefObject, useRef} from 'react';
import L, {Map, TileLayer} from 'leaflet';
import type { City } from '../types/hotels';
import { useAppSelector} from '.';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const renderedCity = useRef('');
  const currentCity = useAppSelector((state) => state.city);

  useEffect(() => {
    if (map !== null && map !== undefined) {
      map.setView(new L.LatLng(city.location.latitude, city.location.longitude), city.location.zoom);
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker){
          layer.remove();
        }
      });
    }
    if (mapRef.current !== null && renderedCity.current !== currentCity) {
      if (map === null || map === undefined) {
        const instance = new Map(mapRef.current, {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: city.location.zoom,
        });
        const layer = new TileLayer (
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        );
        instance.addLayer(layer);
        setMap(instance);
      }
      renderedCity.current = currentCity;
    }
  }, [mapRef, map, city, currentCity]);

  return map;
}

export default useMap;
