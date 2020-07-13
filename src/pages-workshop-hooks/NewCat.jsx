import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/core';
import { Formiz, useForm } from '@formiz/core';
import { Header } from '../components/Header';
import { FieldUploader } from '../components/Fields/FieldUploader';

export const NewCat = () => {
  const form = useForm()

  const handleSubmit = (values) => {
    console.log(values)
    // 'https://api.thecatapi.com/v1/images/upload'
  }

  return (
    <>
      <Header title="New Cat">
        <Button
          as={Link}
          to="/"
          variantColor="brand"
          variant="ghost"
        >
          Back to list
        </Button>
      </Header>

      <Formiz
        connect={form}
        onValidSubmit={handleSubmit}
        autoForm
      >
        <FieldUploader
          name="file"
          label="Cat image"
          required="Image is required"
        />
        <Button type="submit">
          Submit
        </Button>
      </Formiz>
    </>
  );
};
