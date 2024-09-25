import { Alert, AlertProps } from 'antd';
import styled from 'styled-components';

export const AlertEventStyled = styled(Alert)<AlertProps>`
  && {
    position: absolute;
    bottom: 10px;
    z-index: 3;
    max-width: 70vw;

    & .ant-alert-description {
      font-size: calc(10px + 10 * (100vw - 320px) / 1600);
    }

    & .ant-alert-message {
      font-size: calc(10px + 14 * (100vw - 320px) / 1600);
    }

    & .ant-alert-icon {
      font-size: calc(10px + 14 * (100vw - 320px) / 1600);
      margin-inline-end: 8px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }
`;
