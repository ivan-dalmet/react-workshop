import React from 'react';
import {
  Box, Image, Spinner, AspectRatio, Flex,
} from '@chakra-ui/core';
import { WarningTwoIcon } from '@chakra-ui/icons';

export const CatCard = ({
  cat, isError, isLoading, ...props
}) => (
  <Box
    mb="4"
    display="block"
    color="gray.500"
    {...props}
  >
    <AspectRatio
      ratio={1}
    >
      <Box
        maxWidth="100%"
        backgroundColor={!isError ? 'gray.700' : 'red.500'}
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        boxShadow="md"
      >
        <Flex align="center" justify="center" position="absolute" w="full" h="full">
          {isLoading && (
            <Spinner color="white" />
          )}
          {isError && (
            <Flex align="center" color="white" flexDir="column">
              <WarningTwoIcon size="24px" />
              Failed to get this cat
            </Flex>
          )}
        </Flex>
        {!isLoading && cat && (
          <Image
            position="relative"
            boxSize="full"
            src={cat?.url ?? null}
            alt=""
            objectFit="cover"
          />
        )}
      </Box>
    </AspectRatio>

    <Box p="3">
      <Box
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >

        {isLoading && <Spinner size="xs" />}
        {!isLoading && !isError && cat?.id && `ID: ${cat.id}`}
        {isError && 'Error'}
      </Box>
    </Box>
  </Box>
);
