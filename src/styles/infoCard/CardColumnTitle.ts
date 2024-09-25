import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import styled from 'styled-components';
import { baseTheme } from '../theme';

const { Title } = Typography;

export const CardColumnTitle = styled(Title)<TitleProps>`
  && {
    font-size: calc(
      ${baseTheme.font.title.cardOption.min}px +
        (
          ${baseTheme.font.title.cardOption.max -
          baseTheme.font.title.cardOption.min}
        ) * (100vw - 320px) / 1660
    );
    font-weight: 700;
    letter-spacing: 1px;
    color: ${baseTheme.color.secondary};
    margin-bottom: 0;
  }
`;
