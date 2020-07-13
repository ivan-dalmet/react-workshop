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
        <Box>
          <Image h="10rem" w="10rem" objectFit="cover" src={value.url} />
          <IconButton icon="delete" onClick={() => setValue(null)} />
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
