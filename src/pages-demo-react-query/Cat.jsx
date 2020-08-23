import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Box, Button, IconButton, Stack,
} from '@chakra-ui/core';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';
import { useCat, useCats } from './useQuery';
import { MotionBox } from '../components/MotionBox';
import { AnimatedLayout } from '../components/AnimatedLayout';

export const Cat = () => {
  const { catId } = useParams();
  const { data: cat, isLoading, isError } = useCat(catId);
  const { data: cats } = useCats();

  const catIndex = (cats || []).findIndex(({ id }) => id === catId);
  const prevCat = catIndex > 0 ? cats?.find((x, index) => index === catIndex - 1) : undefined;
  const nextCat = catIndex < 12 ? cats?.find((x, index) => index === catIndex + 1) : undefined;
  const isCatAvailableInList = catIndex > -1;

  return (
    <AnimatedLayout>
      <Header title="Cat">
        <Button
          as={Link}
          to="/"
          colorScheme="brand"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>
      <Stack
        direction="row"
        maxW="full"
      >
        <MotionBox
          maxW="full"
          variants={{
            exit: { y: 30 },
            enter: { y: 0 },
          }}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <CatCard
            w="40rem"
            maxW="full"
            cat={cat}
            isLoading={isLoading}
            isError={isError}
          />
        </MotionBox>
        {isCatAvailableInList && (
          <Stack>
            <Box
              textAlign="center"
              fontWeight="bold"
              color="gray.400"
              fontSize="xs"
            >
              {catIndex + 1}
              /
              {cats?.length}
            </Box>
            <IconButton
              as={nextCat ? Link : null}
              to={`/cat/${nextCat?.id}`}
              icon={<ArrowForwardIcon />}
              isDisabled={!nextCat}
            />
            <IconButton
              as={prevCat ? Link : null}
              to={`/cat/${prevCat?.id}`}
              icon={<ArrowBackIcon />}
              isDisabled={!prevCat}
            />
          </Stack>
        )}
      </Stack>
      <MoreCats currentId={catId} />
    </AnimatedLayout>
  );
};
