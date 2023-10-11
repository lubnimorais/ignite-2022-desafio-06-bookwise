import { styled } from '../../../../stitches.config';

export const InputContainer = styled('div', {
  width: '100%',

  background: '$gray800',

  border: '1px solid currentColor',
  borderRadius: 4,

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  paddingRight: '$5',

  color: '$gray500',

  transition: '0.2s',

  '&:focus-within': {
    color: '$green200',
  },

  input: {
    height: 48,

    flex: 1,

    paddingLeft: '$5',

    background: 'none',

    border: 'none',

    fontSize: '0.875rem',
    color: '$gray100',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },
  },
});
