import { Box, Button, ChakraProvider, theme } from '@chakra-ui/react';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { ApiService } from './Api/ApiService';
import { SERVICE } from './common/constants';
import { IItems } from './common/types';
import { TableOfItems } from './components/Table/Table';
import { TextArea } from './components/TextArea/TextArea';

export const App = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<IItems[]>([]);
  const [error, setError] = useState('');

  const inputValue = [...value.split(/\r?\n/)];
  const getItems = async () => {
    try {
      const response = await ApiService.searchArticles({
        searchArticles: inputValue,
      });
      if (response.length) {
        setItems(response);
        setError('');
      } else {
        setError(SERVICE.badDataError);
        return;
      }
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
    }
  };

  const buttonHandler = () => {
    getItems();
  };

  return (
    <ChakraProvider theme={theme}>
      <Box overflow={'hidden'} backgroundColor={'#F5F4F6'}>
        <Box minH="100vh" p={'60px'}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            width="500px"
          >
            <TextArea value={value} setValue={setValue} error={error} />
            <Button
              width={100}
              height={42}
              backgroundColor="#4F37AF"
              justifySelf="flex-start"
              colorScheme="blue"
              color={'#FFFFFF'}
              lineHeight={'161.1%'}
              fontWeight={500}
              fontSize={16}
              fontFamily={'Montserrat'}
              onClick={buttonHandler}
            >
              {SERVICE.buttonText}
            </Button>
          </Box>
          <TableOfItems items={items} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
