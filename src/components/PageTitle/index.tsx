import { ComponentProps, ReactNode } from 'react';

import { Heading } from '../Typography';

import { PageTitleContainer } from './styles';

interface IPageTitleProps extends ComponentProps<typeof PageTitleContainer> {
  icon: ReactNode;
  title: string;
}

const PageTitle = ({ icon, title, ...props }: IPageTitleProps) => {
  return (
    <PageTitleContainer {...props}>
      {icon}
      <Heading size="lg">{title}</Heading>
    </PageTitleContainer>
  );
};

export { PageTitle };
