import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Talk-In-Clouds
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" color='black' borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme='red'>
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Register />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage