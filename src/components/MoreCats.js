import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Stack } from '@chakra-ui/core';

export const MoreCats = ({ currentId }) => {
  return (
    <>
      <Text fontSize="xl" mb="2" fontWeight="bold">
        More cats?
      </Text>
      <Stack isInline>
        {currentId && currentId !== '3le' && (
          <Button
            as={Link}
            to='/cat/3le'
            variantColor="brand"
            variant="outline"
          >
            Screaming cat
          </Button>
        )}
        {currentId && currentId !== 'e2a' && (
          <Button
            as={Link}
            to='/cat/e2a'
            variantColor="brand"
            variant="outline"
          >
            Car cat
          </Button>
        )}
        {currentId && currentId !== 'MTU1MTU5MA' && (
          <Button
            as={Link}
            to='/cat/MTU1MTU5MA'
            variantColor="brand"
            variant="outline"
          >
            Jumping cat
          </Button>
        )}
      </Stack>
    </>
  );
};
