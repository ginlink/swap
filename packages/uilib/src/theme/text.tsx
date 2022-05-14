import styled from 'styled-components'
import { space, layout, variant, color, typography } from 'styled-system'
import { LayoutProps, SpaceProps, ColorProps, TypographyProps } from 'styled-system'

const variants = {
  BODY: 'body',
  MAIN: 'main',
  LINK: 'link',
  GRAY: 'gray',
  SMALL: 'small',
  SUBHEADER: 'subHeader',
  MEDIUM_HEADER: 'mediumHeader',
  LARGE_HEADER: 'largeHeader',
  SUCCESS: 'success',
  FAILURE: 'failure',
  WARNING: 'warning',
  BLUE: 'blue',
  DARK_GRAY: 'darkGray',
} as const

type Variant = typeof variants[keyof typeof variants]

interface BaseTypographyProps extends LayoutProps, SpaceProps, ColorProps, TypographyProps {
  variant?: Variant
  error?: boolean
}

export const styleVariants = {
  [variants.BODY]: {
    color: 'text1',
    fontSize: '16px',
  },
  [variants.MAIN]: {
    fontSize: '16px',
    color: 'text2',
  },
  [variants.LINK]: {
    fontSize: '16px',
    color: 'primary',
  },
  [variants.GRAY]: {
    color: 'textSubtle',
  },
  [variants.SMALL]: {
    fontSize: '12px',
  },
  [variants.SUBHEADER]: {
    fontSize: '20px',
    fontWeight: 600,
  },
  [variants.MEDIUM_HEADER]: {
    fontSize: '24px',
    fontWeight: 600,
  },
  [variants.LARGE_HEADER]: {
    fontSize: '30px',
    fontWeight: 600,
  },
  [variants.SUCCESS]: {
    color: 'success',
  },
  [variants.FAILURE]: {
    color: 'failure',
  },
  [variants.WARNING]: {
    color: 'warning',
  },
  [variants.BLUE]: {
    color: 'blue',
  },
  [variants.DARK_GRAY]: {
    color: 'darkGray',
  },
}

export const styleVariantsSm = {
  [variants.BODY]: {
    fontSize: '14px',
  },
  [variants.MAIN]: {
    fontSize: '14px',
    color: 'text2',
  },
  [variants.LINK]: {
    fontSize: '14px',
    color: 'primary',
  },
  [variants.GRAY]: {
    fontSize: '14px',
    color: 'textSubtle',
  },
  [variants.SMALL]: {
    fontSize: '12px',
  },
  [variants.SUBHEADER]: {
    fontSize: '16px',
    fontWeight: 600,
  },
  [variants.MEDIUM_HEADER]: {
    fontSize: '20px',
    fontWeight: 600,
  },
  [variants.LARGE_HEADER]: {
    fontSize: '26px',
    fontWeight: 600,
  },
  [variants.SUCCESS]: {
    color: 'success',
  },
  [variants.FAILURE]: {
    color: 'failure',
  },
  [variants.WARNING]: {
    color: 'warning',
  },
  [variants.BLUE]: {
    color: 'blue',
  },
  [variants.DARK_GRAY]: {
    color: 'darkGray',
  },
}

export const Typography = styled.div<BaseTypographyProps>`
  line-height: 1.25;
  font-weight: 500;
  color: ${({ theme, error }) => (error ? theme.colors.failure : 'inherit')};

  ${variant({
    variants: styleVariants,
  })}

  ${({ theme }) => theme.mediaQueries.smDown} {
    font-size: 14px;

    ${variant({
      variants: styleVariantsSm,
    })};
  }

  ${space};
  ${layout};
  ${color};
  ${typography};
`
