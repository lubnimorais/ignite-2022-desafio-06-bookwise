import { ComponentProps, ReactNode } from 'react';

import { theme } from '../../../stitches.config';

import { ActionIconContainer } from './styles';

interface IActionIconProps extends ComponentProps<typeof ActionIconContainer> {
  icon: ReactNode;
  /**
   * Propriedade para ter todas as cores do tema do radix dinamicamente
   */
  iconColor: keyof typeof theme.colors;
}

const ActionIcon = ({ icon, iconColor, ...rest }: IActionIconProps) => {
  return (
    <ActionIconContainer {...rest} css={{ color: `$${iconColor}` }}>
      {icon}
    </ActionIconContainer>
  );
};

export { ActionIcon };
