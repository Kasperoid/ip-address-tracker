import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

interface MapMoveCenterProps {
  position: LatLngTuple;
}

const MoveMapCenter = ({ position }: MapMoveCenterProps) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  return null;
};

export default MoveMapCenter;
