import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useReactRouter from 'use-react-router';
import { Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';

export const Cat = () => {
  const { match } = useReactRouter();
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCat({});
    axios.get(`https://api.thecatapi.com/v1/images/${match.params.catId}`)
      .then(res => {
        setCat(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [match.params.catId]);

  return (
    <>
      <Header title="Cat">
        <Button
          as={Link}
          to='/'
          variantColor="teal"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>
      <CatCard
        cat={cat}
        isLoading={loading}
        isError={!!error}
      />
      {!loading && !error && <MoreCats currentId={cat && cat.id} />}
    </>
  );
};
