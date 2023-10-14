import { Fragment, useCallback, useState } from 'react';

import { useSession } from 'next-auth/react';

import { Text } from '../Typography';

import { IRatingWithAuthor, UserRatingCard } from '../UserRatingCard';

import { Link } from '../Link';
import { RatingForm } from '../RatingForm';

import { BookRatingsContainer } from './styles';
import { LoginDialog } from '../LoginDialog';

interface IBookRatingsProps {
  ratings: IRatingWithAuthor[];
  bookId: string;
}

const BookRatings = ({ ratings, bookId }: IBookRatingsProps) => {
  const [showForm, setShowForm] = useState(false);

  const { data: session, status } = useSession();

  const isAuthenticated = status === 'authenticated';

  const canRate = ratings.every((item) => item.user_id !== session?.user.id);

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  const RatingWrapper = isAuthenticated ? Fragment : LoginDialog;

  // FUNCTIONS
  const handleRate = useCallback(() => {
    if (!isAuthenticated) {
      return;
    }

    setShowForm(true);
  }, [isAuthenticated]);
  // END FUNCTIONS

  return (
    <BookRatingsContainer>
      <header>
        <Text>Avaliações</Text>

        {canRate && (
          <RatingWrapper>
            <Link withoutIcon onClick={handleRate} text="Avaliar" />
          </RatingWrapper>
        )}
      </header>

      <section>
        {showForm && (
          <RatingForm
            bookId={bookId}
            onCancel={() => {
              setShowForm(false);
            }}
          />
        )}

        {sortedRatingsByDate.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  );
};

export { BookRatings };
