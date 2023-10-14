import { ReactNode } from 'react';

import { ProfileDetailItemContainer } from './styles';
import { Heading, Text } from '@/components/Typography';

interface IProfileDetailItemProps {
  icon: ReactNode;
  info: string | number;
  label: string;
}

const ProfileDetailItem = ({ icon, info, label }: IProfileDetailItemProps) => {
  return (
    <ProfileDetailItemContainer>
      {icon}

      <div>
        <Heading size="xs" color="gray-200">
          {info}
        </Heading>

        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </ProfileDetailItemContainer>
  );
};

export { ProfileDetailItem };
