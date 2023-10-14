import { styled } from '../../../stitches.config';

export const ActionIconContainer = styled('button', {
  width: 40,
  height: 40,

  border: 'none',
  borderRadius: 4,

  background: '$gray600',

  transition: '0.2s',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: 24,
    height: 24,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:disabled': {
    opacity: 0.5,

    cursor: 'not-allowed',
  },
});
