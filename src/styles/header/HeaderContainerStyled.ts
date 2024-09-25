import { Layout } from 'antd';
import styled from 'styled-components';

const { Header } = Layout;

interface HeaderContainerProps {
  bg: string;
}

export const HeaderContainerStyled = styled(Header)<HeaderContainerProps>`
  && {
    height: 220px;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10px 25px;
  }
`;
