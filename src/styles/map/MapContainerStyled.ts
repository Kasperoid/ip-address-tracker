import { MapContainer, MapContainerProps } from 'react-leaflet';
import styled from 'styled-components';

export const MapContainerStyled = styled(MapContainer)<MapContainerProps>`
  && {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;
