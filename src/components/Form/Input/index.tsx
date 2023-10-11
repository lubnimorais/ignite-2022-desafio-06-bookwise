import { InputHTMLAttributes, ReactNode } from 'react';

import { InputContainer } from './styles';
import { CSS } from '@stitches/react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  css?: CSS;
}

const Input = ({ icon, css, ...rest }: IInputProps) => {
  return (
    <InputContainer css={css}>
      <input {...rest} />

      {icon}
    </InputContainer>
  );
};

export { Input };
