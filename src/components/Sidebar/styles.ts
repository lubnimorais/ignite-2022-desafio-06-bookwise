import Link from 'next/link';

import { styled } from '../../../stitches.config';

export const SidebarContainer = styled('aside', {
  width: 234,
  // descontar os pixel que estão sendo aplicados no bottom também
  height: 'calc(100% - 40px)',

  margin: 20,

  background: '$gray700 url("/images/sidebar-bg.png") no-repeat center',
  backgroundSize: 'cover',

  borderRadius: 12,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,

    marginBottom: 64,
  },
});

export const LoginButton = styled(Link, {
  fontSize: '$md',
  fontWeight: 700,
  color: '$gray200',
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  svg: {
    color: '$gray100',
  },
});

export const UserDetail = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,

    whiteSpace: 'nowrap',

    overflow: 'hidden',

    textOverflow: 'ellipsis',
  },
});
