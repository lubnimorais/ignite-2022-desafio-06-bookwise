import Image from 'next/image';
import { styled } from '../../../stitches.config';
import { Heading } from '../Typography';

export const BookCardContainer = styled('div', {
  display: 'flex',
  gap: '$5',

  padding: '18px $5',

  background: '$gray700',

  // PARA AJUDAR QUANDO FIZER O HOVER, JÁ TER ESSA BORDA
  border: '1px solid $gray700',
  borderRadius: 8,

  cursor: 'pointer',

  position: 'relative',

  overflow: 'hidden',

  transition: '0.2s',

  '&:hover': {
    borderColor: '$gray600',
  },
});

export const ReadBadge = styled('span', {
  position: 'absolute',
  top: 0,
  right: 0,

  display: 'block',

  background: '#0A313C',

  fontSize: '$xs',
  fontWeight: '$bold',
  color: '$green100',

  padding: '$1 $3',

  borderRadius: '0 4px 0 4px',
});

export const BookImage = styled(Image, {
  borderRadius: 4,

  objectFit: 'cover',
});

export const BookDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const BookName = styled(Heading, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  // LIMITAR UM TEXTO A X LINHAS
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
});
