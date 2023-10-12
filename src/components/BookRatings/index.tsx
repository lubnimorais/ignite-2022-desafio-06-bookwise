import { useCallback } from 'react';

import { Link } from '../Link';

import { Text } from '../Typography';

import { IRatingWithAuthor, UserRatingCard } from '../UserRatingCard';

import { BookRatingsContainer } from './styles';

interface IBookRatingsProps {
  ratings: IRatingWithAuthor[];
}

const BookRatings = ({ ratings }: IBookRatingsProps) => {
  const handleRate = useCallback(() => {
    console.log('aqui');
  }, []);

  return (
    <BookRatingsContainer>
      <header>
        <Text>Avaliações</Text>

        <Link withoutIcon onClick={handleRate} text="Avaliar" />
      </header>

      <section>
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </BookRatingsContainer>
  );
};

export { BookRatings };
