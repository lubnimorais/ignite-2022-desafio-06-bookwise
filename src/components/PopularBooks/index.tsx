import { Text } from '../Typography';

import { Link } from '../Link';

import { PopularBooksContainer } from './styles';
import { BookCard } from '../BookCard';

const PopularBooks = () => {
  return (
    <PopularBooksContainer>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explorer" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              id: '',
              name: 'Lorem ipsum',
              summary:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'John Doe',
              averageRating: 4,
              cover_url: 'https://github.com/lubnimorais.png',
              total_pages: 100,
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </PopularBooksContainer>
  );
};

export { PopularBooks };
