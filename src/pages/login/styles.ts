import { styled } from '../../../stitches.config';

export const LoginContainer = styled('main', {
  minHeight: '100vh',

  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',

  padding: 20,
});

export const LoginSection = styled('section', {
  width: '100%',
  height: '100%',

  background: 'url(/images/logo-bg.png) no-repeat center',
  backgroundSize: 'cover',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 10,
});

export const AuthenticateSection = styled('section', {
  width: '100%',
  maxWidth: 372,

  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  paddingLeft: 20,
});

export const BoxAuthenticateButtons = styled('div', {
  marginTop: 40,
});
