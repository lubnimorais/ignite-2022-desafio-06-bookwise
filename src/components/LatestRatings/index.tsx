import { useSession } from 'next-auth/react';

import { ChartLineUp } from 'phosphor-react';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/libs/axios';

import { PageTitle } from '../PageTitle';
import { Text } from '../Typography';
import { IRatingWithAuthorAndBook, RatingCard } from '../RatingCard';

import { LatestContainer, LatestRatingsContainer } from './styles';
import { Link } from '../Link';

const LatestRatings = () => {
  const { data: session } = useSession();

  const userId = session?.user.id;

  const { data: latestUserRating } = useQuery<IRatingWithAuthorAndBook>(
    ['latest-user-rating', userId],
    async () => {
      const response = await api.get(`/ratings/user-latest`);

      return response.data.rating ?? null;
    },
    {
      enabled: !!userId,
    },
  );

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

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size="sm">Sua última avaliação</Text>

            <Link href={`/profile/${userId}`} text="Ver todas" />
          </header>

          <RatingCard variant="compact" rating={latestUserRating} />
        </LatestContainer>
      )}

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
