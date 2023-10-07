import { NextPageWithLayout } from './_app.page';

import { DefaultLayout } from '@/layouts/DefaultLayout';

import { LatestRatings } from '@/components/LatestRatings';

import { HomeContainer } from './home';
import { PopularBooks } from '@/components/PopularBooks';

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  );
};

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>;
};

export default HomePage;
