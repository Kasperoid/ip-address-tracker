import { Typography } from 'antd';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
import styled from 'styled-components';
import { baseTheme } from '../theme';

const { Paragraph } = Typography;

export const CardColumnText = styled(Paragraph)<ParagraphProps>`
  && {
    color: ${baseTheme.color.primary};
    font-size: calc(
      ${baseTheme.font.text.cardOption.min}px +
        (
          ${baseTheme.font.text.cardOption.max -
          baseTheme.font.text.cardOption.min}
        ) * (100vw - 320px) / 1660
    );
    font-weight: 500;
  }
`;
