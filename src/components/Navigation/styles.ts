import Link from 'next/link';
import { styled } from '../../../stitches.config';

export const NavigationContainer = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
});

export const NavItemContent = styled(Link, {});
