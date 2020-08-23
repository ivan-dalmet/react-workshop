import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCat } from '../pages-demo-react-query/useQuery';

export const Cat = () => {
  const { catId } = useParams();
  const { data: cat } = useCat(catId);

  return (
    <>
      Cat page
      {' '}
      {cat ? cat.id : 'Not found'}
      <br />
      <Link to="/">
        Back to list
      </Link>
    </>
  );
};
