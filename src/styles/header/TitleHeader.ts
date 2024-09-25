import { Typography } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

const { Title } = Typography;

export const TitleHeader = styled(Title)`
  && {
    font-weight: 500;
    font-size: calc(
      ${baseTheme.font.title.header.min}px +
        (${baseTheme.font.title.header.max - baseTheme.font.title.header.min}) *
        (100vw - 320px) / 1600
    );
    color: ${baseTheme.color.tertiary};
  }
`;
