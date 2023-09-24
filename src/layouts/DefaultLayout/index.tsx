import { ReactNode } from 'react';
import Head from 'next/head';

import { Sidebar } from '@/components/Sidebar';

import { DefaultLayoutContainer, DefaultLayoutContent } from './styles';

interface IDefaultLayout {
  title: string;
  children: ReactNode;
}

const DefaultLayout = ({ title, children }: IDefaultLayout) => {
  return (
    <DefaultLayoutContainer>
      <Head>
        <title>{`${title} | BookWise`}</title>
      </Head>

      <Sidebar />

      <DefaultLayoutContent>{children}</DefaultLayoutContent>
    </DefaultLayoutContainer>
  );
};

export { DefaultLayout };
