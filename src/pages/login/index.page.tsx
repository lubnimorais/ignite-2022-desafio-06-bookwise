import { Heading, Text } from '@/components/Typography';
import {
  AuthenticateSection,
  BoxAuthenticateButtons,
  LoginContainer,
  LoginSection,
} from './styles';
import { AuthButton } from '@/components/AuthButton';

export default function Login() {
  return (
    <LoginContainer>
      <LoginSection>
        <img src="/images/logo.svg" alt="Logotipo BookWise" />
      </LoginSection>

      <AuthenticateSection>
        <Heading size="lg" color="gray-100">
          Boas vindas!
        </Heading>

        <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

        <BoxAuthenticateButtons>
          <AuthButton
            title="Entrar com o Google"
            image="/images/icons/google.svg"
            alt="Logotipo Google"
            provider="google"
          />
          <AuthButton
            title="Entrar com o Github"
            image="/images/icons/github.svg"
            alt="Logotipo Github"
            provider="github"
          />
          <AuthButton
            title="Entrar como visitante"
            image="/images/icons/rocket.svg"
            alt="Ícone de foguete"
          />
        </BoxAuthenticateButtons>
      </AuthenticateSection>
    </LoginContainer>
  );
}
