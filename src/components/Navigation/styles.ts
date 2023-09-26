import Link from 'next/link';
import { styled } from '../../../stitches.config';

export const NavigationContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
});

export const NavItemContent = styled(Link, {
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',

  color: '$gray400',

  transition: '0.2s',

  svg: {
    marginRight: '$3',
  },

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    // fazer assim, senão não funciona no Stitches
    content: "''",

    width: 4,
    height: 24,

    background: '$gradient-vertical',

    marginRight: '$4',

    borderRadius: '$full',

    transition: '0.2s',

    // para aparecer e sumir dinamicamente
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        fontWeight: 'bold',
        color: '$gray100',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
});
