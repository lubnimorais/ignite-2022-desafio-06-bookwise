import { useCallback, useState } from 'react';

import { NextPageWithLayout } from '../_app.page';

import { Binoculars, MagnifyingGlass } from 'phosphor-react';

import { DefaultLayout } from '@/layouts/DefaultLayout';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/libs/axios';

import { PageTitle } from '@/components/PageTitle';

import { Input } from '@/components/Form/Input';
import { Tag } from '@/components/Tag';
import { BookCard, IBookWithAverageRating } from '@/components/BookCard';

import { BookGrid, ExplorerContainer, TagsContainer } from './styles';
import { Category } from '@prisma/client';

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // USE QUERY
  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const response = await api.get('/books/categories');

      return response.data.categories ?? [];
    },
  );

  const { data: books } = useQuery<IBookWithAverageRating[]>(
    ['books', selectedCategory],
    async () => {
      const response = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      });

      return response.data.books ?? [];
    },
  );
  // END USE QUERY

  // FUNCTIONS
  const handleSelectedCategory = useCallback((categoryId: string | null) => {
    setSelectedCategory(categoryId);
  }, []);
  // END FUNCTIONS

  const filteredBooks = books?.filter(
    (book) =>
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ExplorerContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{
            maxWidth: 433,
          }}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => handleSelectedCategory(null)}
        >
          Tudo
        </Tag>
        {categories &&
          categories.map((category) => (
            <Tag
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => handleSelectedCategory(category.id)}
            >
              {category.name}
            </Tag>
          ))}
      </TagsContainer>

      <BookGrid>
        {filteredBooks &&
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
      </BookGrid>
    </ExplorerContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>;
};

export default ExplorePage;
