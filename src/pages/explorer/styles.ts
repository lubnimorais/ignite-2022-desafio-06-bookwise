import { styled } from '../../../stitches.config';

export const ExplorerContainer = styled('section', {
  width: '100%',
  height: '100%',

  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',

  marginTop: 40,
  marginBottom: 48,
});

export const BookGrid = styled('div', {
  height: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // ALTURA DA LINHA
  gridAutoRows: 188,
  gap: '$5',

  overflowY: 'auto',

  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
