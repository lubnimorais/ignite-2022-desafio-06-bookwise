import { useCallback, useState } from 'react';

import { Link } from '../Link';

import { Text } from '../Typography';

import { IRatingWithAuthor, UserRatingCard } from '../UserRatingCard';

import { BookRatingsContainer } from './styles';
import { RatingForm } from '../RatingForm';

interface IBookRatingsProps {
  ratings: IRatingWithAuthor[];
  bookId: string;
}

const BookRatings = ({ ratings, bookId }: IBookRatingsProps) => {
  const [showForm, setShowForm] = useState(false);

  const handleRate = useCallback(() => {
    setShowForm(true);
  }, []);

  return (
    <BookRatingsContainer>
      <header>
        <Text>Avaliações</Text>

        <Link withoutIcon onClick={handleRate} text="Avaliar" />
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

        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  );
};

export { BookRatings };
