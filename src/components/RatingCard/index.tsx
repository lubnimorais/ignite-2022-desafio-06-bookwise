import Link from 'next/link';

import { Book, Rating, User } from '@prisma/client';

import { Avatar } from '../Avatar';

import {
  BookContent,
  BookDetails,
  BookImage,
  RatingCardContainer,
  ToggleShowMoreButton,
  UserDetails,
} from './styles';
import { Heading, Text } from '../Typography';
import { getRelativeTimeString } from '@/utils/getRelativeTimeString';
import { RatingStars } from '../RatingStarts';
import { useToggleShowMore } from '@/hook/useToggleShowMore';

export interface IRatingWithAuthorAndBook extends Rating {
  user: User;
  book: Book;
}

interface IRatingCard {
  rating: IRatingWithAuthorAndBook;
}

const MAX_SUMMARY_LENGTH = 180;

const RatingCard = ({ rating }: IRatingCard) => {
  const distanceDate = getRelativeTimeString(
    new Date(rating.created_at),
    'pt-BR',
  );

  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH);

  return (
    <RatingCardContainer>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>

          <div>
            <Text>{rating.user.name}</Text>
            <Text size="sm" color="gray-400">
              {distanceDate}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </UserDetails>

      <BookDetails>
        <Link href={`/explore?bookId=${rating.book_id}`}>
          <BookImage
            width={108}
            height={152}
            src={rating.book.cover_url}
            alt={rating.book.name}
          />
        </Link>

        <BookContent>
          <div>
            <Heading size="xs">{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">
              {rating.book.author}
            </Text>
          </div>

          <Text size="sm" color="gray-300" css={{ marginTop: '$5' }}>
            {bookSummary}
            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? 'ver menos' : 'ver mais'}
              </ToggleShowMoreButton>
            )}
          </Text>
        </BookContent>
      </BookDetails>
    </RatingCardContainer>
  );
};

export { RatingCard };
