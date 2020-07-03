import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';

export const Cat = () => {
  const { catId } = useParams();
  const cat = { id: catId };
  const loading = false;
  const error = false;

  // `https://api.thecatapi.com/v1/images/${catId}`

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
        w="25rem"
        cat={cat}
        isLoading={loading}
        isError={error}
      />
      {/* <MoreCats currentId={catId} /> */}
    </>
  );
};
