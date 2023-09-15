import { styled } from '../../../stitches.config';

export const AuthButtonContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  marginBottom: 8,
});

export const BoxAuthButton = styled('button', {
  width: '100%',
  height: 72,

  backgroundColor: '$gray600',

  border: 'none',
  borderRadius: 8,

  fontSize: '$lg',
  fontWeight: '$bold',
  color: '$gray200',

  padding: '0 $6',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',
});
