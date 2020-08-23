import React from 'react';
import { Link } from 'react-router-dom';
import { useCats } from '../pages-demo-react-query/useQuery';

export const CatList = () => {
  const {
    data: cats,
  } = useCats();

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

      {(cats || []).map((cat) => (
        <div>
          <Link to={`/cat/${cat.id}`}>
            {cat.id}
          </Link>
        </div>
      ))}
    </>
  );
};
