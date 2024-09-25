import { Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import styled from 'styled-components';
import { baseTheme } from '../theme';
const { Search } = Input;
export const HeaderSearchStyled = styled(Search)<SearchProps>`
  && {
    max-width: 500px;

    & .ant-btn-primary {
      background-color: ${baseTheme.color.primary};
      transition: 0.5s;

      &:hover {
        padding: 20px;
        background-color: ${baseTheme.color.primary};
      }

      &:active {
        background-color: ${baseTheme.color.primary};
      }
    }
  }
`;
