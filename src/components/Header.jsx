import React, { useContext } from 'react';
import {
  Text, Badge, Stack, Flex, Box,
} from '@chakra-ui/core';

import { DemoContext } from '../context/demo';

export const Header = ({ children, title }) => {
  const type = useContext(DemoContext);

  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" mb="4">
      <Stack direction="row" align="center" mr="4">
        <Text fontSize="4xl" m="0" fontWeight="bold">
          {title}
        </Text>
        {type && (
        <Box>
          <Badge colorScheme="brand">
            {type}
          </Badge>
        </Box>
        )}
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} align="center" flex="1" spacing="4">
        {children}
      </Stack>
    </Flex>
  );
};
