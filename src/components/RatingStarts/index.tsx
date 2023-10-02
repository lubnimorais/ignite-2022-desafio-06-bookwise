import { ComponentProps } from 'react';

import { Star } from 'phosphor-react';

import { RatingStarsContainer } from './styles';

interface IRatingStarsProps
  extends ComponentProps<typeof RatingStarsContainer> {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingStars = ({ rating, size = 'sm', ...props }: IRatingStarsProps) => {
  return (
    <RatingStarsContainer size={size} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`start-${index}`}
          weight={index + 1 <= rating ? 'fill' : 'regular'}
        />
      ))}
    </RatingStarsContainer>
  );
};

export { RatingStars };
