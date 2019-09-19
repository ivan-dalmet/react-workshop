import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i + 1 }));

export const CatList = () => {
  const cats = placeholderCats;
  const loading = false;

  const loadData = () => {};

  return (
    <>
      <Header title="Cats">
        <Button
          variantColor="teal"
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
      <Stack isInline spacing="6" shouldWrapChildren flexWrap="wrap">
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
      </Stack>
    </>
  );
};
