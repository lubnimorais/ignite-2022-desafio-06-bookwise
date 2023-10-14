import { ComponentProps, useCallback, useState } from 'react';

import { Star } from 'phosphor-react';

import { RatingStarsContainer } from './styles';

interface IRatingStarsProps
  extends ComponentProps<typeof RatingStarsContainer> {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  setRating?: (rating: number) => void;
}

const RatingStars = ({
  rating,
  size = 'sm',
  setRating,
  ...props
}: IRatingStarsProps) => {
  const [previewValue, setPreviewValue] = useState(0);

  const isEditable = !!setRating;

  const ratingValue = isEditable ? previewValue : rating;

  // FUNCTION
  const handleMouseEnter = useCallback(
    (value: number) => {
      if (isEditable) {
        setPreviewValue(value);
      }
    },
    [isEditable],
  );

  const handleMouseLeave = useCallback(() => {
    // TODO - quando passar o mouse por todos mesmo se tiver sido clicado a nota volta a 0
    if (isEditable) {
      setPreviewValue(rating);
    }
  }, [isEditable, rating]);

  const handleSetValue = useCallback(() => {
    if (isEditable) {
      setRating(previewValue);
    }
  }, [isEditable, previewValue, setRating]);
  //

  return (
    <RatingStarsContainer
      css={isEditable ? { cursor: 'pointer' } : undefined}
      size={size}
      {...props}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`start-${index}`}
          weight={index + 1 <= ratingValue ? 'fill' : 'regular'}
          // passar o mouse pelo icone
          onMouseEnter={() => {
            handleMouseEnter(index + 1);
          }}
          // quando tira o mouse
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </RatingStarsContainer>
  );
};

export { RatingStars };
