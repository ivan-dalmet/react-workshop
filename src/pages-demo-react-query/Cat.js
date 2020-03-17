import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';
import fetcher from '../config/fetcher';

export const Cat = () => {
  const { catId } = useParams();
  const { data: cat, status } = useQuery(
    `images/${catId}`,
    fetcher(),
    {
      retry: 1,
    }
  );

  return (
    <>
      <Header title="Cat">
        <Button
          as={Link}
          to='/'
          variantColor="brand"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>
      <CatCard
        cat={cat}
        isLoading={status === 'loading'}
        isError={status === 'error'}
      />
      <MoreCats currentId={catId} />
    </>
  );
};
