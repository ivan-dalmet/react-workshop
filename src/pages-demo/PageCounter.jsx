import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Stat, StatLabel, StatNumber, Stack, StatHelpText, IconButton, Button,
} from '@chakra-ui/core';
import { Header } from '../components/Header';

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
      <Header title="Counter">
        <Button
          as={Link}
          to="/"
          ml="auto"
        >
          Back to cats
        </Button>
      </Header>
      <Stack isInline>

        <Stat>
          <StatLabel>Manual Counter</StatLabel>
          <Stack isInline align="center" spacing="3">
            <Button
              size="xs"
              onClick={() => setManualCounter(0)}
            >
              Reset
            </Button>
            <IconButton
              size="xs"
              icon="minus"
              onClick={() => setManualCounter((x) => x - 1)}
            />
            <StatNumber minW="30px" textAlign="center">
              {manualCounter}
            </StatNumber>
            <IconButton
              size="xs"
              icon="add"
              onClick={() => setManualCounter((x) => x + 1)}
            />
          </Stack>
          <StatHelpText>Auto increment everytime 10 of auto counter</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Auto Counter</StatLabel>
          <Stack isInline align="center" spacing="3">
            <Button
              size="xs"
              onClick={() => setAutoCounter(0)}
            >
              Reset
            </Button>
            <StatNumber minW="30px" textAlign="center">
              {autoCounter}
            </StatNumber>
          </Stack>
          <StatHelpText>Auto increment every seconds</StatHelpText>
        </Stat>

      </Stack>
    </>
  );
};
