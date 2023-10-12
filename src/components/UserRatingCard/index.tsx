import Link from 'next/link';

import { useSession } from 'next-auth/react';

import { Rating, User } from '@prisma/client';

import { Heading, Text } from '../Typography';

import { Avatar } from '../Avatar';

import { UserDetails, UserRatingCardContainer } from './styles';
import { getRelativeTimeString } from '@/utils/getRelativeTimeString';
import { RatingStars } from '../RatingStarts';

export interface IRatingWithAuthor extends Rating {
  user: User;
}

interface IUserRatingCardProps {
  rating: IRatingWithAuthor;
}

const UserRatingCard = ({ rating }: IUserRatingCardProps) => {
  const { data: session } = useSession();

  const distance = getRelativeTimeString(new Date(rating.created_at), 'pt-BR');

  const isOwner = session?.user.id === rating.user_id;

  return (
    <UserRatingCardContainer variant={isOwner ? 'highlight' : 'primary'}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
          </Link>

          <div>
            <Heading size="xs">{rating.user.name}</Heading>

            <Text size="sm" color="gray-400">
              {distance}
            </Text>
          </div>
        </section>

        <RatingStars rating={rating.rate} />
      </UserDetails>

      <Text size="sm" color="gray-300">
        {rating.description}
      </Text>
    </UserRatingCardContainer>
  );
};

export { UserRatingCard };
