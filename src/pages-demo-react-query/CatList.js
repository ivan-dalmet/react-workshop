import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Button, Stack } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { useCats } from './useQuery';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i }));

export const CatList = () => {
  const { data: cats, status, isFetching, refetch } = useCats();

  return (
    <>
      <Header title="Cats">
        <Button
          variantColor="brand"
          variant="ghost"
          onClick={() => refetch({ force: true })}
          leftIcon="repeat"
          isLoading={isFetching}
          loadingText="Refresh"
          minW="130px"
        >
          Refresh
        </Button>
        <Stack ml="auto" spacing="4" isInline>
          <Button
            as={Link}
            variantColor="brand"
            to="/cat/new"
          >
            Add New Cat
          </Button>
          <Button
            as={Link}
            to="/counter"
          >
            Counter demo
          </Button>
        </Stack>
      </Header>
      <SimpleGrid spacing="6" columns={{ base: 2, sm: 3, md: 4 }}>
        {(cats || placeholderCats).map(cat => (
          <CatCard
            as={status === 'success' ? Link : null}
            to={`/cat/${cat.id}`}
            key={cat.id}
            cat={cat}
            isLoading={status === 'loading'}
            isError={status === 'error'}
            isLink
          />
        ))}
      </SimpleGrid>
    </>
  );
};
