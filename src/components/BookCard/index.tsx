import { Book } from '@prisma/client';
import {
  BookCardContainer,
  BookDetails,
  BookImage,
  BookName,
  ReadBadge,
} from './styles';
import { Text } from '../Typography';
import { RatingStars } from '../RatingStarts';
import { RatingsDialog } from '../RatingsDialog';

export interface IBookWithAverageRating extends Book {
  averageRating: number;
  alreadyRead: boolean;
}

interface IBookCardProps {
  book: IBookWithAverageRating;
  size?: 'md' | 'lg';
}

const BookCard = ({ book, size = 'md' }: IBookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  };

  return (
    <RatingsDialog bookId={book.id}>
      <BookCardContainer>
        {book.alreadyRead && <ReadBadge>LIDO</ReadBadge>}

        <BookImage
          src={book.cover_url}
          width={IMAGE_SIZES[size].width}
          height={IMAGE_SIZES[size].height}
          alt={book.name}
          css={{
            minWidth: IMAGE_SIZES[size].width,
          }}
        />

        <BookDetails>
          <div>
            <BookName size="xs">{book.name}</BookName>
            <Text size="sm" color="gray-400">
              {book.author}
            </Text>
          </div>

          <RatingStars rating={book.averageRating} />
        </BookDetails>
      </BookCardContainer>
    </RatingsDialog>
  );
};

export { BookCard };
