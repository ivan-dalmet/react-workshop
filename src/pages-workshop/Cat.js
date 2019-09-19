import React from 'react';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';

export const Cat = () => {
  const { match } = useReactRouter();
  const cat = { id: match.params.catId };
  const loading = false;
  const error = false;

  return (
    <>
      <Header title="Cat">
        <Button
          as={Link}
          to='/'
          variantColor="teal"
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
