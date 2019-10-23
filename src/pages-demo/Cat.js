import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';

export const Cat = () => {
  const { catId } = useParams();
  const [cat, setCat] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCat({});
    axios.get(`https://api.thecatapi.com/v1/images/${catId}`)
      .then(res => {
        setCat(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [catId]);

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
