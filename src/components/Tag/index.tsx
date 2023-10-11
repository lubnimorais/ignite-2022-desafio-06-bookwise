import { ComponentProps, ReactNode } from 'react';

import { TagContainer } from './styles';

interface ITagProps extends ComponentProps<typeof TagContainer> {
  children: ReactNode;
  active?: boolean;
}

const Tag = ({ children, active, ...rest }: ITagProps) => {
  return (
    <TagContainer active={active} {...rest}>
      {children}
    </TagContainer>
  );
};

export { Tag };
