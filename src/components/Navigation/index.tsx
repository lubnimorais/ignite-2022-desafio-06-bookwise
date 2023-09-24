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
    href: '/explore',
    icon: <Binoculars size={24} />,
  },
];

const Navigation = () => {
  return (
    <NavigationContainer>
      {NAV_ITENS.map(({ label, href, icon }) => (
        <NavItemContent href={href} key={label}>
          {icon}
          {label}
        </NavItemContent>
      ))}
    </NavigationContainer>
  );
};

export { Navigation };
