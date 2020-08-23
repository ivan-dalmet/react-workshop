import React from 'react';
import {
  Box, PseudoBox, Image, Spinner, AspectRatioBox, Flex, Icon,
} from '@chakra-ui/core';
import { MotionBox } from './MotionBox';

export const CatCard = ({
  cat, isError, isLoading, style, ...props
}) => (
  <MotionBox
    layout
    mb="4"
    display="block"
    color="gray.500"
    {...props}
  >
    <AspectRatioBox
      ratio={1}
    >
      <PseudoBox
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
              <Icon name="warning-2" size="24px" />
              Fail to get this cat
            </Flex>
          )}
        </Flex>
        {!isLoading && cat && (
          <Image
            position="relative"
            size="full"
            src={cat?.url ?? null}
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
        {!isLoading && !isError && cat?.id && `ID: ${cat.id}`}
        {isError && 'Error'}
      </Box>
    </Box>
  </MotionBox>
);
