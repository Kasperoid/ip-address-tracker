import { Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import { ipConnectionType } from '../../types/types';
import { iconPerson } from '../Icons/MarkerLocationIcon';
import MoveMapCenter from './MoveMapCenter';
import { MapContainerStyled } from '../../styles/map/MapContainerStyled';

interface MapIpContainerProps extends ipConnectionType {
  position?: LatLngTuple;
}

const MapIpContainer = ({ position, isp }: MapIpContainerProps) => {
  return (
    <MapContainerStyled
      attributionControl={false}
      center={position ? position : [37.40599, -122.078514]}
      zoom={13}
    >
      <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EZlDxyYciq0mRxjL8jfZ" />
      {position && (
        <>
          <MoveMapCenter position={position} />
          <Marker position={position} icon={iconPerson}>
            <Popup>{isp ? isp : 'None'}</Popup>
          </Marker>
        </>
      )}
    </MapContainerStyled>
  );
};

export default MapIpContainer;
