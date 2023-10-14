import { styled } from '../../../stitches.config';

export const ProfileDetailsContainer = styled('div', {
  // para fazer a borda ir até onde tem conteúdo
  height: 'max-content',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderLeft: '1px solid $gray700',
});

export const UserInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&::after': {
    // content tem que ser assim no Stitches
    content: "''",

    width: 32,
    height: 4,

    display: 'block',

    background: '$gradient-horizontal',

    borderRadius: '$full',

    marginTop: 40,
  },
});

export const ProfileDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  marginTop: 50,
});
