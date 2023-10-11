import { useState } from 'react';

import { NextPageWithLayout } from '../_app.page';

import { Binoculars, MagnifyingGlass } from 'phosphor-react';

import { DefaultLayout } from '@/layouts/DefaultLayout';

import { PageTitle } from '@/components/PageTitle';

import { ExplorerContainer, TagsContainer } from './styles';
import { Input } from '@/components/Form/Input';
import { Tag } from '@/components/Tag';

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('');

  return (
    <ExplorerContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{
            maxWidth: 433,
          }}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </header>

      <TagsContainer>
        <Tag>Computação</Tag>
      </TagsContainer>
    </ExplorerContainer>
  );
};

ExplorePage.getLayout = (page) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>;
};

export default ExplorePage;
