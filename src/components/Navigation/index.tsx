import { useMemo } from 'react';

import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';

import { ChartLineUp, Binoculars, User } from 'phosphor-react';

import { NavItemContent, NavigationContainer } from './styles';

const NAV_ITENS = [
  {
    label: 'Início',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explorar',
    href: '/explorer',
    icon: <Binoculars size={24} />,
  },
];

const Navigation = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const navItems = useMemo(() => {
    if (session) {
      // concat adiciona um elemento no final do array
      return NAV_ITENS.concat({
        label: 'Perfil',
        href: `/profile/${session.user.id}`,
        icon: <User size={24} />,
      });
    }

    return NAV_ITENS;
  }, [session]);

  return (
    <NavigationContainer>
      {navItems.map(({ label, href, icon }) => (
        // verificar se a rota é igual ao href
        <NavItemContent href={href} key={label} active={router.asPath === href}>
          {icon}
          {label}
        </NavItemContent>
      ))}
    </NavigationContainer>
  );
};

export { Navigation };
