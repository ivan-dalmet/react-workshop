import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i + 1 }));

export const CatList = () => {
  const cats = placeholderCats;
  const loading = false;

  // 'https://api.thecatapi.com/v1/images/search?limit=12&order=RANDOM'

  const loadData = () => {};

  return (
    <>
      <Header title="Cats">
        <Button
          variantColor="brand"
          variant="ghost"
          onClick={loadData}
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
