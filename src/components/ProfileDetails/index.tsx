import { IProfile } from '@/pages/profile/[id].page';

import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react';

import { Avatar } from '../Avatar';
import { Heading, Text } from '../Typography';
import { ProfileDetailItem } from './components/ProfileDetailItem';

import {
  ProfileDetailsContainer,
  ProfileDetailsWrapper,
  UserInfo,
} from './styles';

interface IProfileDetailsProps {
  profile: IProfile;
}

const ProfileDetails = ({ profile }: IProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear();

  return (
    <ProfileDetailsContainer>
      <UserInfo>
        <Avatar
          src={profile.user.avatar_url}
          alt={profile.user.name}
          size="lg"
        />

        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>

        <Text size="sm" color="gray-400">
          membro desde {memberSinceYear}
        </Text>
      </UserInfo>

      <ProfileDetailsWrapper>
        <ProfileDetailItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lida"
        />

        <ProfileDetailItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />

        <ProfileDetailItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />

        {profile.mostReadCategory && (
          <ProfileDetailItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfileDetailsWrapper>
    </ProfileDetailsContainer>
  );
};

export { ProfileDetails };
