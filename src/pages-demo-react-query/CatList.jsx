import React from 'react';
import { Link } from 'react-router-dom';
import { SimpleGrid, Button, Stack } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { useCats } from './useQuery';
import { MotionBox } from '../components/MotionBox';
import { AnimatedLayout } from '../components/AnimatedLayout';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i }));

export const CatList = () => {
  const {
    data: cats, isLoading, isError, isSuccess, isFetching, refetch,
  } = useCats();

  return (
    <AnimatedLayout>
      <Header title="Cats">
        <Button
          variantColor="brand"
          variant="ghost"
          onClick={() => refetch({ force: true })}
          leftIcon="repeat"
          isLoading={isFetching}
          loadingText="Refresh"
          minW="130px"
        >
          Refresh
        </Button>
        <Stack ml="auto" spacing="4" isInline>
          <Button
            as={Link}
            variantColor="brand"
            to="/cat/new"
          >
            Add New Cat
          </Button>
          <Button
            as={Link}
            to="/counter"
          >
            Counter demo
          </Button>
        </Stack>
      </Header>
      <SimpleGrid spacing="6" columns={{ base: 2, sm: 3, md: 4 }}>
        {(cats || placeholderCats).map((cat) => (
          <MotionBox key={cat.id}>
            <CatCard
              as={isSuccess ? Link : null}
              to={`/cat/${cat.id}`}
              cat={cat}
              isLoading={isLoading}
              isError={isError}
              whileHover={{ y: 10 }}
            />
          </MotionBox>
        ))}
      </SimpleGrid>
    </AnimatedLayout>
  );
};
