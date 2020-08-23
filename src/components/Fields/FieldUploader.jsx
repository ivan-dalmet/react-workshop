import React from 'react';
import { useField } from '@formiz/core';
import { Box, Image, IconButton } from '@chakra-ui/core';
import { FormGroup } from '../FormGroup';

export const FieldUploader = (props) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
  } = useField(props);
  const {
    label, required, placeholder, helper, ...otherProps
  } = props;
  const showError = !isValid && isSubmitted;

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    label,
    showError,
    ...otherProps,
  };

  return (
    <FormGroup {...formGroupProps}>
      {value ? (
        <Box
          position="relative"
          h="10rem"
          w="10rem"
          bg="gray.200"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            objectFit="cover"
            h="full"
            w="full"
            src={value.url}
          />
          <IconButton
            position="absolute"
            top="2"
            right="2"
            icon="delete"
            size="sm"
            onClick={() => setValue(null)}
          />
        </Box>
      ) : (
        <Box
          as="input"
          w="100%"
          type="file"
          accept="image/*"
          onChange={(e) => {
            setValue({
              file: e.target.files[0],
              url: URL.createObjectURL(e.target.files[0]),
            });
          }}
        />
      )}
    </FormGroup>
  );
};
