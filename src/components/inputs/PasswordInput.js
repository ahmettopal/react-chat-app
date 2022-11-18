import React from 'react';
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react';
import { Eye, Lock } from '../icons';

function PasswordInput({
  showLeftIcon = true,
  inputGroupProps = {},
  ...props
}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup
      my={'3'}
      backgroundColor={'light'}
      size={'lg'}
      {...inputGroupProps}
    >
      {showLeftIcon && (
        <InputLeftElement
          pointerEvents="none"
         // children={<Icon as={Lock} color="default" />}
        />
      )}
      <Input
        type={show ? 'text' : 'password'}
        placeholder="Parola"
        borderWidth={0}
        {...props}
      />
      <InputRightElement>
        <Button backgroundColor={'transparent'} onClick={handleClick}>
          {/*<Icon as={Eye} color="default" />*/}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;