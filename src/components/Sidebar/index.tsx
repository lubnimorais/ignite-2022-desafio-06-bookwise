import { useCallback } from 'react';

import { useRouter } from 'next/router';

import { signOut, useSession } from 'next-auth/react';

import { Navigation } from '../Navigation';

import { SignIn, SignOut } from 'phosphor-react';

import { Text } from '../Typography';

import { LoginButton, SidebarContainer, UserDetail } from './styles';
import { Avatar } from '../Avatar';

const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const user = session?.user;

  const handleOpenProfile = useCallback(async () => {
    await router.push(`/profile/${user?.id}`);
  }, [router, user?.id]);

  return (
    <SidebarContainer>
      <div>
        <img className="logo" src="/images/logo.svg" alt="BookWise Logo" />

        <Navigation />
      </div>

      <footer>
        {!user ? (
          <LoginButton href="/login">
            Fazer login
            <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetail>
            <Avatar
              src={user.avatar_url}
              size="sm"
              alt={user.name}
              onClick={handleOpenProfile}
              // propriedade do stitches para colocar estilos personalizados
              css={{
                cursor: 'pointer',
              }}
            />
            <Text size="sm">{user.name}</Text>
            <SignOut size={20} color="#F75A68" onClick={() => signOut()} />
          </UserDetail>
        )}
      </footer>
    </SidebarContainer>
  );
};

export { Sidebar };
