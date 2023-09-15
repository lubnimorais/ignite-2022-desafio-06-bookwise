import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { AuthButtonContainer, BoxAuthButton } from './styles';

interface IAuthButtonProps {
  title: string;
  image: string;
  alt?: string;
  provider?: string;
  callbackUrl?: string;
}

const AuthButton = ({
  title,
  image,
  alt,
  provider,
  callbackUrl = '/',
}: IAuthButtonProps) => {
  const router = useRouter();

  const handleSignIn = useCallback(async () => {
    if (!provider) {
      await router.push(callbackUrl);

      return;
    }

    await signIn(provider, {
      // URL que o Next Auth vai encaminhar o usuário após o login
      callbackUrl,
    });
  }, [callbackUrl, provider, router]);

  return (
    <AuthButtonContainer>
      <BoxAuthButton onClick={() => handleSignIn()}>
        <img src={image} alt={alt} />
        {title}
      </BoxAuthButton>

      {/* <AuthButton>
        <img src="/images/icons/github.svg" alt="Logotipo Github" />
        Entrar com o Github
      </AuthButton>

      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Ícone de foguete" />
        Entrar como visitante
      </AuthButton> */}
    </AuthButtonContainer>
  );
};

export { AuthButton };
