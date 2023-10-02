import { ChartLineUp } from 'phosphor-react';
import { PageTitle } from '../PageTitle';
import { LatestRatingsContainer } from './styles';
import { Text } from '../Typography';
import { RatingCard } from '../RatingCard';

const LatestRatings = () => {
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
        {Array.from({ length: 20 }).map((_, index) => (
          <RatingCard
            key={index}
            rating={{
              id: 'dsdsds',
              rate: 4,
              user: {
                id: 'ieuriuei',
                name: 'John Doe',
                avatar_url: 'https://github.com/lubnimorais.png',
                email: 'johndoe@test.com',
                created_at: new Date('2022-01-01T00:00:00.000Z'),
              },
              book: {
                id: 'wewoew',
                author: 'John Doe',
                cover_url: 'https://github.com/lubnimorais.png',
                name: 'Livro de John Doe',
                summary:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error aut officia, dicta consequuntur ad quidem beatae enim minima cupiditate quasi dolorem asperiores delectus nostrum nulla fugit dignissimos nemo ab quisquam sequi unde laborum! Repellendus mollitia libero minima! Enim impedit sequi culpa veritatis in quas voluptates debitis quaerat mollitia nam. Ipsum, est architecto? Ipsum exercitationem earum quas rem, quae officiis consequuntur esse natus laboriosam temporibus in est id quod totam, eius tempore. Eos modi quidem mollitia incidunt vero velit, blanditiis praesentium. Necessitatibus quasi minima ipsa cumque ipsam molestiae repudiandae voluptates quod quae debitis atque similique recusandae odio iste sed, obcaecati dicta labore impedit? Iusto ad debitis consequuntur tempora itaque perspiciatis odit ratione in veritatis quaerat sint culpa odio vitae amet nisi ducimus sunt repellendus, pariatur nam deserunt reiciendis quibusdam. Fugiat aliquam odio, voluptatem asperiores quisquam amet voluptatibus vel aspernatur distinctio consectetur neque doloremque culpa recusandae repellat iste. Maiores ducimus dolor facere repellat modi veniam possimus, voluptatibus sunt. Repellat quibusdam doloribus nisi similique fuga, nostrum a beatae? Aspernatur totam voluptatem quaerat neque minus, voluptas exercitationem! Accusamus corrupti, amet provident iste laborum pariatur deserunt aliquid impedit similique eius recusandae, dolor atque debitis consequuntur quia temporibus numquam sint facere hic fuga magnam nihil.',
                total_pages: 100,
                created_at: new Date(),
              },
              created_at: new Date(),
            }}
          ></RatingCard>
        ))}
      </section>
    </LatestRatingsContainer>
  );
};

export { LatestRatings };
