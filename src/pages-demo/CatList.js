import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SimpleGrid, Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';

const placeholderCats = [...Array(12)].map((x, i) => ({ id: i }));

export const CatList = () => {
  const [cats, setCats] = useState(placeholderCats);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(() => {
    setCats(placeholderCats)
    setLoading(true);
    axios.get('https://api.thecatapi.com/v1/images/search?limit=12&order=RANDOM')
      .then(res => {
        setCats(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Header title="Cats">
        <Button
          variantColor="brand"
          variant="ghost"
          onClick={loadData}
          leftIcon="repeat"
          isLoading={loading}
          loadingText="Refresh"
          minW="130px"
        >
          Refresh
        </Button>
        <Button
          as={Link}
          to="/counter"
          ml="auto"
        >
          Counter demo
        </Button>
      </Header>
      <SimpleGrid spacing="6" columns={{ base: 2, sm: 3, md: 4 }}>
        {cats.map(cat => (
          <CatCard
            as={!loading ? Link : null}
            to={`/cat/${cat.id}`}
            key={cat.id}
            cat={cat}
            isLoading={loading}
            isLink
          />
        ))}
      </SimpleGrid>
    </>
  );
};
