import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapIpContainer = () => {
  return (
    <MapContainer>
      <TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
    </MapContainer>
  );
};

export default MapIpContainer;
