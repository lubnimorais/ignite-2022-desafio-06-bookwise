import { styled } from '../../../stitches.config';

export const TagContainer = styled('button', {
  background: 'none',

  color: '$purple100',

  border: '1px solid $purple100',
  borderRadius: '$full',

  padding: '$1 $4',

  transition: '0.2s',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        background: '$purple200',

        borderColor: '$purple200',

        color: '$gray100',
      },
    },
  },
});
