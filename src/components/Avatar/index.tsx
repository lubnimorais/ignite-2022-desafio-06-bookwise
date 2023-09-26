import { ComponentProps } from 'react';

import { AvatarContainer, AvatarImage } from './styles';

interface IAvatarProps extends ComponentProps<typeof AvatarContainer> {
  src: string;
  size?: 'sm' | 'md' | 'lg';
  alt: string;
}

const Avatar = ({ src, size = 'md', alt, ...props }: IAvatarProps) => {
  return (
    <AvatarContainer size={size} {...props}>
      <AvatarImage src={src} width={80} height={80} alt={alt} />
    </AvatarContainer>
  );
};

export { Avatar };
