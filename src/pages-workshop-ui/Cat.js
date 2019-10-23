import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAxios } from '../hooks-demo/useAxios';

export const Cat = () => {
  const { catId } = useParams();
  const { data: cat } = useAxios(`images/${catId}`);

  return (
    <>
      Cat page {cat ? cat.id : 'Not found'}
      <br />
      <Link to="/">
        Back to list
      </Link>
    </>
  );
};
