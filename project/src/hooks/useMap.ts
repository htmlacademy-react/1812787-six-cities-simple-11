import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import type { Location } from '../types/hotels';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, cityLocation: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedMap = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedMap.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityLocation.latitude,
          lng: cityLocation.longitude,
        },
        zoom: cityLocation.zoom,
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
      isRenderedMap.current = true;
    }
  }, [mapRef, map, cityLocation]);

  return map;
}

export default useMap;
