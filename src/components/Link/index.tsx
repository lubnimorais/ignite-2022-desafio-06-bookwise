import { ComponentProps } from '@stitches/react';
import { LinkContainer } from './styles';
import { CaretLeft, CaretRight } from 'phosphor-react';

interface ILinkProps
  extends Omit<ComponentProps<typeof LinkContainer>, 'href'> {
  text: string;
  href?: string;
  withoutIcon?: boolean;
  onClick?: () => void;
}

const Link = ({
  text,
  href,
  withoutIcon,
  iconSide = 'right',
  onClick,
  ...rest
}: ILinkProps) => {
  return (
    <LinkContainer
      as={onClick ? 'button' : undefined}
      href={href!}
      iconSide={iconSide}
      onClick={onClick}
      {...rest}
    >
      {text}
      {!withoutIcon && (iconSide === 'right' ? <CaretRight /> : <CaretLeft />)}
    </LinkContainer>
  );
};

export { Link };
