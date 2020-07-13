import React, { useContext } from 'react';
import {
  Text, Badge, Stack, Box,
} from '@chakra-ui/core';

import { DemoContext } from '../context/demo';

export const Header = ({ children, title }) => {
  const type = useContext(DemoContext);

  return (
    <Stack align="center" isInline spacing="3" mb="4">
      <Text fontSize="4xl" m="0" fontWeight="bold">
        {title}
      </Text>
      {type && (
        <Box>
          <Badge variantColor="brand">
            {type}
          </Badge>
        </Box>
      )}
      {children}
    </Stack>
  );
};
