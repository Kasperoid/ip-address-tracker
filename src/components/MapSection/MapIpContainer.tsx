import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';
import { ipAddressType } from '../../types/types';
import { iconPerson } from '../Icons/MarkerLocationIcon';
import MoveMapCenter from './MoveMapCenter';

interface MapIpContainerProps extends Pick<ipAddressType, 'isp'> {
  position: LatLngTuple;
}

const MapIpContainer = ({ position, isp }: MapIpContainerProps) => {
  return (
    <MapContainer
      attributionControl={false}
      center={position}
      zoom={13}
      className="map-container"
    >
      <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EZlDxyYciq0mRxjL8jfZ" />
      <MoveMapCenter position={position} />
      <Marker position={position} icon={iconPerson}>
        <Popup>{isp ? isp : 'None'}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapIpContainer;
