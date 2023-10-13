import { ReactNode, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import { BookOpen, BookmarkSimple, X } from 'phosphor-react';

import { Heading, Text } from '../Typography';

import { CategoriesOnBooks, Category } from '@prisma/client';

import { useQuery } from '@tanstack/react-query';

import { api } from '@/libs/axios';

import { BookInfo } from './BookInfo';
import { RatingStars } from '../RatingStarts';
import { BookRatings } from '../BookRatings';

import { IBookWithAverageRating } from '../BookCard';
import { IRatingWithAuthor } from '../UserRatingCard';

import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles';

interface IBookDetail extends IBookWithAverageRating {
  ratings: IRatingWithAuthor[];
  categories: (CategoriesOnBooks & { category: Category })[];
}

interface IRatingsDialogProps {
  children: ReactNode;
  bookId: string;
}

const RatingsDialog = ({ children, bookId }: IRatingsDialogProps) => {
  const [open, setOpen] = useState(false);

  const { data: book } = useQuery<IBookDetail>(
    ['book', bookId],
    async () => {
      const response = await api.get(`/books/details/${bookId}`);

      return response.data.book ?? {};
    },
    {
      enabled: open,
    },
  );

  const ratingLength = book?.ratings.length ?? 0;

  const categories =
    book?.categories.map((category) => category.category.name).join(', ') || '';

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    src={book.cover_url}
                    width={171}
                    height={242}
                    alt={book.name}
                  />

                  <BookContent>
                    <div>
                      <Heading size="sm">{book?.name}</Heading>

                      <Text color="gray-300" css={{ marginTop: '$2' }}>
                        {book.author}
                      </Text>
                    </div>

                    <div>
                      <RatingStars rating={5} size="md" />

                      <Text
                        color="gray-400"
                        size="sm"
                        css={{ marginTop: '$1' }}
                      >
                        {ratingLength}{' '}
                        {ratingLength === 1 ? 'avaliação' : 'avaliações'}
                      </Text>
                    </div>
                  </BookContent>
                </BookDetailsContainer>

                <BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple />}
                    title="Categorias"
                    info={categories}
                  />

                  <BookInfo
                    icon={<BookOpen />}
                    title="Páginas"
                    info={String(book.total_pages)}
                  />
                </BookInfos>
              </BookDetailsWrapper>

              <BookRatings ratings={book.ratings} bookId={bookId} />
            </>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export { RatingsDialog };
