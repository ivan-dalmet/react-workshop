import React from 'react';
import { Link } from 'react-router-dom';
import {
  SimpleGrid, Button,
} from '@chakra-ui/core';
import { RepeatIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { useCats } from './useQuery';
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
          mr="auto"
          colorScheme="brand"
          variant="ghost"
          onClick={() => refetch({ force: true })}
          leftIcon={<RepeatIcon />}
          isLoading={isFetching}
          loadingText="Refresh"
          minW="130px"
        >
          Refresh
        </Button>
        <Button
          as={Link}
          colorScheme="brand"
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
      </Header>
      <SimpleGrid spacing="6" columns={{ base: 2, sm: 3, md: 4 }}>
        {(cats || placeholderCats).map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: 10 }}
          >
            <CatCard
              as={isSuccess ? Link : null}
              to={`/cat/${cat.id}`}
              cat={cat}
              isLoading={isLoading}
              isError={isError}
            />
          </motion.div>
        ))}
      </SimpleGrid>
    </AnimatedLayout>
  );
};
