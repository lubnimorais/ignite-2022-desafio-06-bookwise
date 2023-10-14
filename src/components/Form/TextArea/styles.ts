import { styled } from '../../../../stitches.config';

export const TextAreaContainer = styled('div', {
  width: '100%',

  background: '$gray800',

  border: '1px solid currentColor',
  borderRadius: 4,

  display: 'flex',
  flexDirection: 'column',

  color: '$gray500',

  transition: '0.2s',

  '&:focus-within': {
    color: '$green200',
  },

  textarea: {
    minHeight: 136,

    flex: 1,

    padding: '0.875rem $5',

    background: 'none',

    border: 'none',

    fontSize: '0.875rem',
    color: '$gray100',

    resize: 'none',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },

    '&::-webkit-scrollbar': {
      width: 6,
    },

    '&::-webkit-scrollbar-track': {
      // background: '$gray700',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',

      borderRadius: '$full',
    },
  },

  span: {
    fontSize: '$xs',
    color: '#7C&C8A',

    marginLeft: 'auto',

    paddingRight: 8,
    paddingBottom: 4,
  },
});
