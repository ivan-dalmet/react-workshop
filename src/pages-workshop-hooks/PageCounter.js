import React from 'react';
import { Link } from 'react-router-dom';
import { Stat, StatLabel, StatNumber, Stack, StatHelpText, IconButton, Button } from '@chakra-ui/core';
import { Header } from '../components/Header';

export const PageCounter = () => {
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
            >
              Reset
            </Button>
            <IconButton
              size="xs"
              icon="minus"
            />
            <StatNumber minW="30px" textAlign="center">
              0
            </StatNumber>
            <IconButton
              size="xs"
              icon="add"
            />
          </Stack>
          <StatHelpText>Auto increment everytime 10 of auto counter</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Auto Counter</StatLabel>
          <Stack isInline align="center" spacing="3">
            <Button
              size="xs"
            >
              Reset
            </Button>
            <StatNumber minW="30px" textAlign="center">
              0
            </StatNumber>
          </Stack>
          <StatHelpText>Auto increment every seconds</StatHelpText>
        </Stat>

      </Stack>
    </>
  );
};
