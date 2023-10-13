import { styled } from '../../../stitches.config';

export const RatingFormContainer = styled('div', {
  background: '$gray700',

  padding: '$6',

  borderRadius: 8,
});

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
});
