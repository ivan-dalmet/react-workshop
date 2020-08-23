import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button, Stack } from '@chakra-ui/core';

export const MoreCats = ({ currentId }) => (
  <>
    <Text fontSize="xl" mb="2" fontWeight="bold">
      More cats?
    </Text>
    <Stack direction="row">
      {currentId && currentId !== '3le' && (
      <Button
        as={Link}
        to="/cat/3le"
        colorScheme="brand"
        variant="outline"
      >
        Screaming cat
      </Button>
      )}
      {currentId && currentId !== 'e2a' && (
      <Button
        as={Link}
        to="/cat/e2a"
        colorScheme="brand"
        variant="outline"
      >
        Car cat
      </Button>
      )}
      {currentId && currentId !== 'MTU1MTU5MA' && (
      <Button
        as={Link}
        to="/cat/MTU1MTU5MA"
        colorScheme="brand"
        variant="outline"
      >
        Jumping cat
      </Button>
      )}
    </Stack>
  </>
);
