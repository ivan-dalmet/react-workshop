import React from 'react';
import { Link } from 'react-router-dom';
import { useAxios } from '../hooks-demo/useAxios';

export const CatList = () => {
  const { data: cats } = useAxios('images/search?limit=12&order=RANDOM');

  return (
    <>
      <Link to="/cat/new">
        Add New Cat
      </Link>
      <Link to="/counter">
        Go to Counter
      </Link>
      <br />
      Cats list

      {(cats || []).map(cat => (
        <div>
          <Link to={`/cat/${cat.id}`}>
            {cat.id}
          </Link>
        </div>
      ))}
    </>
  );
};
