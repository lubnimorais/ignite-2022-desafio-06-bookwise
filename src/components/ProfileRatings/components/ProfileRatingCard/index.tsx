import Link from 'next/link';

import { IProfileRating } from '../..';

import { getRelativeTimeString } from '@/utils/getRelativeTimeString';

import { Heading, Text } from '@/components/Typography';
import { RatingStars } from '@/components/RatingStarts';

import {
  BookDetails,
  BookImage,
  CardContent,
  ProfileRatingCardContainer,
} from './styles';

interface IProfileRatingCardProps {
  rating: IProfileRating;
}

const ProfileRatingCard = ({ rating }: IProfileRatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR');

  return (
    <ProfileRatingCardContainer>
      <Text size="sm" color="gray-300">
        {distance}
      </Text>

      <CardContent>
        <BookDetails>
          {/* estiles no link para ficar com alinhado com as estrelas */}
          <Link
            href={`/explorer?bookId=${rating.book_id}`}
            style={{ display: 'flex' }}
          >
            <BookImage
              src={rating.book.cover_url}
              width={98}
              height={134}
              alt={rating.book.name}
            />
          </Link>

          <section>
            <div>
              <Heading size="sm">{rating.book.name}</Heading>

              <Text size="sm" color="gray-400">
                {rating.book.author}
              </Text>
            </div>

            <RatingStars rating={rating.rate} />
          </section>
        </BookDetails>

        <Text size="sm" color="gray-300">
          {rating.description}
        </Text>
      </CardContent>
    </ProfileRatingCardContainer>
  );
};

export { ProfileRatingCard };
