import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import { Header } from '../components/Header';

export const NewCat = () => {
  return (
    <>
      <Header title="New Cat">
        <Button
          as={Link}
          to="/"
          variantColor="brand"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>
    </>
  );
};
