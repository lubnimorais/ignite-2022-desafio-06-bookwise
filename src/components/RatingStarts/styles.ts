import { styled } from '../../../stitches.config';

export const RatingStarsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: '$purple100',
    boxSizing: 'content-box',

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  variants: {
    size: {
      sm: {
        svg: {
          width: 14,
          height: 14,

          padding: '0 2px',
        },
      },
      md: {
        svg: {
          width: 20,
          height: 20,

          padding: '0 3px',
        },
      },
      lg: {
        svg: {
          width: 24,
          height: 24,

          padding: '0 2px',
        },
      },
    },
  },
});
