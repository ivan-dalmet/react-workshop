import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, IconButton, Stack } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';
import { useCat, useCats } from './useQuery';

export const Cat = () => {
  const { catId } = useParams();
  const { data: cat, status } = useCat(catId);
  const { data: cats } = useCats();

  const catIndex = (cats || []).findIndex(({ id }) => id === catId);
  const prevCat = catIndex > 0 ? cats?.find((x, index) => index === catIndex - 1) : undefined;
  const nextCat = catIndex < 12 ? cats?.find((x, index) => index === catIndex + 1) : undefined;
  const isCatAvailableInList = catIndex > -1;

  return (
    <>
      <Header title="Cat">
        <Button
          as={Link}
          to="/"
          variantColor="brand"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>
      <Stack isInline>
        <CatCard
          w="25rem"
          cat={cat}
          isLoading={status === 'loading'}
          isError={status === 'error'}
        />
        {isCatAvailableInList && (
          <Stack>
            <Box
              textAlign="center"
              fontWeight="bold"
              color="gray.400"
              fontSize="xs"
            >
              {catIndex + 1}/{cats?.length}
            </Box>
            <IconButton
              as={nextCat ? Link : null}
              to={`/cat/${nextCat?.id}`}
              icon="arrow-forward"
              isDisabled={!nextCat}
            />
            <IconButton
              as={prevCat ? Link : null}
              to={`/cat/${prevCat?.id}`}
              icon="arrow-back"
              isDisabled={!prevCat}
            />
          </Stack>
        )}
      </Stack>
      <MoreCats currentId={catId} />
    </>
  );
};
