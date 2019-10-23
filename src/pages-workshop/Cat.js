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
        isLoading={loading}
        isError={error}
      />
      {/* {!isLoading && <MoreCats currentId={cat && cat.id} />} */}
    </>
  );
};
