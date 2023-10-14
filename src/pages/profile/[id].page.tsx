import { useSession } from 'next-auth/react';

import { useRouter } from 'next/router';

import { NextPageWithLayout } from '../_app.page';

import { useQuery } from '@tanstack/react-query';

import { api } from '@/libs/axios';

import { DefaultLayout } from '@/layouts/DefaultLayout';

import { IProfileRating, ProfileRatings } from '@/components/ProfileRatings';

import { ProfileContainer } from './styles';
import { ProfileDetails } from '@/components/ProfileDetails';

export interface IProfile {
  user: {
    name: string;
    avatar_url: string;
    member_since: string;
  };
  ratings: IProfileRating[];
  readPages: number;
  ratedBooks: number;
  readAuthors: number;
  mostReadCategory?: string;
}

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const userId = router.query.id as string;

  // USE QUERY
  const { data: profile } = useQuery<IProfile>(
    ['profile', userId],
    async () => {
      const response = await api.get(`/profile/${userId}`);

      return response.data.profile ?? {};
    },
    {
      enabled: !!userId,
    },
  );
  // END USE QUERY

  const isOwnProfile = session?.user.id === userId;

  return (
    <ProfileContainer>
      {profile ? (
        <>
          <ProfileRatings
            isOwnProfile={isOwnProfile}
            ratings={profile.ratings}
          />

          <ProfileDetails profile={profile} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </ProfileContainer>
  );
};

ProfilePage.getLayout = (page) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>;
};

export default ProfilePage;
