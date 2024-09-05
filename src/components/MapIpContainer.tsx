import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { ipAddressType } from '../types/types';
import { iconPerson } from './Icons/MarkerLocationIcon';

interface MapIpContainerProps extends Pick<ipAddressType, 'isp'> {
  position: LatLngExpression;
}

const MapIpContainer = ({ position, isp }: MapIpContainerProps) => {
  return (
    <MapContainer
      attributionControl={false}
      center={position}
      zoom={13}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
      }}
    >
      <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EZlDxyYciq0mRxjL8jfZ" />
      <Marker position={position} icon={iconPerson}>
        <Popup>{isp}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapIpContainer;
