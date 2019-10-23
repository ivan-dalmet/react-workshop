import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { SimpleGrid, Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { useQuery } from '@apollo/react-hooks';
import { Header } from '../components/Header';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i }));

const catsQuery = gql`
  query cats {
    cats @rest(type: "[Cat]", path: "images/search?limit=12&order=Desc") {
      id
      url
    }
  }
`;

export const CatList = () => {
  const { data, loading, refetch } = useQuery(
    catsQuery,
    { notifyOnNetworkStatusChange: true, /* fetchPolicy: 'network-only' */ }
  );

  const { cats } = data || { cats: placeholderCats };

  return (
    <>
      <Header title="Cats">
        <Button
          variantColor="brand"
          variant="ghost"
          onClick={() => { refetch(); }}
          leftIcon="repeat"
          isLoading={loading}
          loadingText="Refresh"
          minW="130px"
        >
          Refresh
        </Button>
        <Button
          as={Link}
          to="/counter"
          ml="auto"
        >
          Counter demo
        </Button>
      </Header>
      <SimpleGrid spacing="6" columns={{ base: 2, sm: 3, md: 4 }}>
        {cats.map(cat => (
          <CatCard
            as={!loading ? Link : null}
            to={`/cat/${cat.id}`}
            key={cat.id}
            cat={cat}
            isLoading={loading}
            isLink
          />
        ))}
      </SimpleGrid>
    </>
  );
};
