import { ReactNode } from 'react';

import { BookInfoContainer } from './styles';
import { Heading, Text } from '@/components/Typography';

interface IBookInfoProps {
  icon: ReactNode;
  title: string;
  info: string;
}

const BookInfo = ({ icon, title, info }: IBookInfoProps) => {
  return (
    <BookInfoContainer>
      {icon}

      <div>
        <Text size="sm" color="gray-300">
          {title}
        </Text>

        <Heading size="sm" color="gray-200">
          {info}
        </Heading>
      </div>
    </BookInfoContainer>
  );
};

export { BookInfo };
