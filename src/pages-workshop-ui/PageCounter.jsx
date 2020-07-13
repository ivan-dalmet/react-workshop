import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PageCounter = () => {
  const [manualCounter, setManualCounter] = useState(0);
  const [autoCounter, setAutoCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoCounter((x) => x + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (autoCounter && autoCounter % 10 === 0) {
      setManualCounter((x) => x + 1);
    }
  }, [autoCounter]);

  return (
    <>
      <Link to="/">
        Back to cats
      </Link>
      <br />
      Page Counter
      <div>
        Manual counter:
        {' '}
        {manualCounter}
      </div>
      <div>
        Auto counter:
        {' '}
        {autoCounter}
      </div>
    </>
  );
};
