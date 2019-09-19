import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import useReactRouter from 'use-react-router';
import { Button} from '@chakra-ui/core';
import { CatCard } from '../components/CatCard';
import { useQuery } from '@apollo/react-hooks';
import { Header } from '../components/Header';
import { MoreCats } from '../components/MoreCats';

const catQuery = gql`
  query cat($id: UUID!) {
    cat(id: $id) @rest(type: "Cat", path: "images/{args.id}") {
      id
      url
    }
  }
`;

export const Cat = () => {
  const { match: { params: { catId }} } = useReactRouter();
  const { data, loading, error } = useQuery(catQuery, { variables: { id: catId } })
  const { cat } = data || {};

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
        isError={error}
      />
      {!loading && !error && cat && <MoreCats currentId={cat && cat.id} />}
    </>
  );
};
