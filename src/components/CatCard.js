import React from 'react';
import { Box, PseudoBox, Image, Spinner, AspectRatioBox, Flex, Icon } from '@chakra-ui/core';

export const CatCard = ({ cat, isError, isLoading, isLink, ...props }) => (
  <PseudoBox
    maxW="240px"
    mb="4"
    display="block"
    color="gray.500"
    transition="0.4s"
    _hover={isLink ? { color: 'brand.500', transform: 'translateY(-10px)' } : null}
    {...props}
  >
    <AspectRatioBox
      ratio={1}
    >
      <PseudoBox
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
              <Icon name="warning-2" size="24px" />
              Fail to get this cat
            </Flex>
          )}
        </Flex>
        {!isLoading && (
          <Image
            position="relative"
            size="2xs"
            src={cat ? cat.url : null}
            alt=""
            objectFit="cover"
          />
        )}
      </PseudoBox>
    </AspectRatioBox>

    <Box p="3">
      <Box
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >

        {isLoading && <Spinner size="xs" />}
        {!isLoading && !isError && cat && cat.id && `ID: ${cat.id}`}
        {isError && 'Error'}
      </Box>
    </Box>
  </PseudoBox>
);
