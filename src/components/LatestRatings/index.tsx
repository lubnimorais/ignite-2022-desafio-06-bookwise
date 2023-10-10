import { ChartLineUp } from 'phosphor-react';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/libs/axios';

import { PageTitle } from '../PageTitle';
import { Text } from '../Typography';
import { IRatingWithAuthorAndBook, RatingCard } from '../RatingCard';

import { LatestRatingsContainer } from './styles';

const LatestRatings = () => {
  const { data: ratings } = useQuery<IRatingWithAuthorAndBook[]>(
    ['latest-ratings'],
    async () => {
      const response = await api.get('/ratings/latest');

      return response.data?.ratings ?? [];
    },
  );

  return (
    <LatestRatingsContainer>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{
          marginBottom: 40,
        }}
      ></PageTitle>

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {ratings?.map((rating) => (
          <RatingCard key={rating.id} rating={rating}></RatingCard>
        ))}
      </section>
    </LatestRatingsContainer>
  );
};

export { LatestRatings };
