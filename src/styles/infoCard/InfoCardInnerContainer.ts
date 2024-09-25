import { Flex } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

export const InfoCardInnerContainer = styled(Flex)`
  && {
    padding: 15px;
    max-width: 80vw;
    border-radius: 14px;
    justify-content: space-between;
    background-color: ${baseTheme.color.tertiary};

    @media screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
`;
