import { useState } from 'react';

import { useSession } from 'next-auth/react';

import { Heading } from '../Typography';

import { Avatar } from '../Avatar';

import { RatingFormContainer, UserDetails } from './styles';
import { RatingStars } from '../RatingStarts';

interface IRatingFormProps {
  bookId: string;
  onCancel: () => void;
}

const RatingForm = ({ bookId, onCancel }: IRatingFormProps) => {
  const [currentRating, setCurrentRating] = useState(0);

  const { data: session } = useSession();

  const user = session?.user;

  return (
    <RatingFormContainer>
      {user && (
        <UserDetails>
          <section>
            <Avatar src={user.avatar_url} alt={user.name} />

            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentRating} />
        </UserDetails>
      )}
    </RatingFormContainer>
  );
};

export { RatingForm };
