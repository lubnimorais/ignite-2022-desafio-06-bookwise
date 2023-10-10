import { Text } from '../Typography';

import { Link } from '../Link';

import { useQuery } from '@tanstack/react-query';

import { BookCard, IBookWithAverageRating } from '../BookCard';

import { PopularBooksContainer } from './styles';
import { api } from '@/libs/axios';

const PopularBooks = () => {
  const { data: popularBooks } = useQuery<IBookWithAverageRating[]>(
    ['popular-books'],
    async () => {
      const response = await api.get('/books/popular');

      return response.data.books ?? [];
    },
  );

  return (
    <PopularBooksContainer>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explorer" text="Ver todos" />
      </header>

      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book} />
        ))}
      </section>
    </PopularBooksContainer>
  );
};

export { PopularBooks };
