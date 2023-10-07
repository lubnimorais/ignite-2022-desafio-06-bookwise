import { styled } from '../../../stitches.config';

export const PopularBooksContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  marginTop: 40,

  overflowY: 'auto',

  paddingBottom: 40,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },

  // REMOVENDO A BARRA DE SCROLL
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
