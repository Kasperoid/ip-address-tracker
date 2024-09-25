import { Flex } from 'antd';
import styled from 'styled-components';

export const InfoCardContainer = styled(Flex)`
  && {
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    z-index: 3;

    @media screen and (max-width: 768px) {
      top: -100px;
    }
  }
`;
