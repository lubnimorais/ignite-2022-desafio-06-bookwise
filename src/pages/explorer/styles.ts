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
