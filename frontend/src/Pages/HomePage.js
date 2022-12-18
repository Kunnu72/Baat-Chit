import React from 'react'
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const HomePage = () => {
  return (<Container maxW='xl' centerContent>
    <Box
      d='flex'
      justifyContent="center"
      p={3}
       px={4}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
       boxShadow= "lg"
    >
      <Text fontSize="4xl" fontFamily="Work sans" color="black" textAlign="center">
        Gossips
      </Text>
    </Box>
    <Box bg="#ffffff" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px" boxShadow="lg">
       <Tabs variant='soft-rounded' colorScheme='yellow'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
       <Login />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
  </Container>
  );
}

export default HomePage