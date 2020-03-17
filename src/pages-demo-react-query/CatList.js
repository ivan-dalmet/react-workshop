import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { SimpleGrid, Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import fetcher from '../config/fetcher';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i }));

export const CatList = () => {
  const { data: cats, status, isFetching, refetch } = useQuery(
    'images/search?limit=12&order=RANDOM',
    fetcher(),
    {
      staleTime: 24 * 60 * 60 * 1000, // Prevent refetch during 24 hours
    }
  );

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
        <Button
          as={Link}
          to="/counter"
          ml="auto"
        >
          Counter demo
        </Button>
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
