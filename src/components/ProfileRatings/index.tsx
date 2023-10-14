import { useMemo, useState } from 'react';

import { MagnifyingGlass, User } from 'phosphor-react';

import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client';

import { Link } from '../Link';
import { PageTitle } from '../PageTitle';
import { Input } from '../Form/Input';
import { ProfileRatingCard } from './components/ProfileRatingCard';

import { ProfileRatinsContainer, RatingsList } from './styles';
import { Text } from '../Typography';

export interface IProfileRating extends Rating {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category;
      }[];
  };
}

interface IProfileRatingsProps {
  ratings: IProfileRating[];
  isOwnProfile: boolean;
}

const ProfileRatings = ({ ratings, isOwnProfile }: IProfileRatingsProps) => {
  const [search, setSearch] = useState('');

  const filteredRatings = useMemo(() => {
    return ratings.filter((rating) =>
      rating.book.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, ratings]);

  return (
    <ProfileRatinsContainer>
      {isOwnProfile ? (
        <PageTitle title="Perfil" icon={<User size={25} />} />
      ) : (
        <Link
          href="/"
          text="Voltar"
          iconSide="left"
          color="white"
          css={{ alignSelf: 'flex-start' }}
        />
      )}

      <Input
        placeholder="Buscar livro avaliado"
        icon={<MagnifyingGlass size={20} />}
        css={{ marginTop: 40, marginBottom: 32 }}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <RatingsList>
        {filteredRatings.map((rating) => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}

        {filteredRatings.length <= 0 && (
          <Text color="gray-400" css={{ textAlign: 'center' }}>
            {search
              ? 'Nenhum resultado encontrado'
              : 'Nenhuma avaliação encontrada'}
          </Text>
        )}
      </RatingsList>
    </ProfileRatinsContainer>
  );
};

export { ProfileRatings };
