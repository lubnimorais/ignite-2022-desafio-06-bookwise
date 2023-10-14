import { styled } from '../../../stitches.config';

export const ProfileRatinsContainer = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'auto',

  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const RatingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
});
