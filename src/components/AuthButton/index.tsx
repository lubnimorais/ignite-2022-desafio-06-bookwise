import { AuthButtonContainer, BoxAuthButton } from './styles';

interface IAuthButtonProps {
  title: string;
  image: string;
  alt?: string;
}

const AuthButton = ({ title, image, alt }: IAuthButtonProps) => {
  return (
    <AuthButtonContainer>
      <BoxAuthButton>
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
