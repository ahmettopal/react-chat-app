import React from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input as CInput,
  Icon as CIcon,
} from '@chakra-ui/react';

const AuthInput = ({ Icon, ...props }) => {
  return (
    <InputGroup my={'3'} backgroundColor={'light'} size={'lg'}>
      {Icon ? (
        <InputLeftElement
          pointerEvents="none"
          children={<CIcon as={Icon} color="default" />}
        />
      ) : null}
      <CInput borderWidth={0} {...props} />
    </InputGroup>
  );
};

export default AuthInput;