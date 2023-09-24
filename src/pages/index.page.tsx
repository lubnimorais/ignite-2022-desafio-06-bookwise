import { signOut, useSession } from 'next-auth/react';
import { NextPageWithLayout } from './_app.page';
import { DefaultLayout } from '@/layouts/DefaultLayout';

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession();

  return (
    <>
      <h1>Oi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => signOut()}>Deslogar</button>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default HomePage;
