import { FormEvent, useCallback, useState } from 'react';

import { useSession } from 'next-auth/react';

import { Check, X } from 'phosphor-react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/libs/axios';

import { Heading } from '../Typography';

import { Avatar } from '../Avatar';
import { RatingStars } from '../RatingStarts';
import { TextArea } from '../Form/TextArea';
import { ActionIcon } from '../ActionIcon';

import {
  ActionsContainer,
  FormContainer,
  RatingFormContainer,
  UserDetails,
} from './styles';

interface IRatingFormProps {
  bookId: string;
  onCancel: () => void;
}

const RatingForm = ({ bookId, onCancel }: IRatingFormProps) => {
  const [currentRate, setCurrentRate] = useState(0);
  const [description, setDescription] = useState('');

  const { data: session } = useSession();

  const queryClient = useQueryClient();

  const user = session?.user;

  const submitDisabled = !description.trim() || !currentRate;

  // FUNCTIONS
  const { mutateAsync: handleMutate } = useMutation(
    async () => {
      const data = {
        description,
        rate: currentRate,
      };

      await api.post(`/books/${bookId}/rate`, data);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['book', bookId]);
        await queryClient.invalidateQueries(['books']);
        onCancel();
      },
    },
  );

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (submitDisabled) return;

      await handleMutate();
    },
    [submitDisabled, handleMutate],
  );
  // END FUNCTIONS

  return (
    <RatingFormContainer>
      {user && (
        <UserDetails>
          <section>
            <Avatar src={user.avatar_url} alt={user.name} />

            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars
            size="lg"
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </UserDetails>
      )}

      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <ActionsContainer>
          <ActionIcon
            type="button"
            icon={<X />}
            iconColor="purple100"
            onClick={onCancel}
          />

          <ActionIcon
            type="submit"
            icon={<Check />}
            iconColor="green100"
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </RatingFormContainer>
  );
};

export { RatingForm };
