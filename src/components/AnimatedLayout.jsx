import React from 'react';
import { MotionBox } from './MotionBox';

export const AnimatedLayout = (props) => (
  <MotionBox
    variants={{
      exit: { opacity: 0, y: 5 },
      enter: { opacity: 1, y: 0 },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
    {...props}
  />
);
