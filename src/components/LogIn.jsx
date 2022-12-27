import React from 'react'
import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const LogIn = () => {
  return (
    <Container maxW={'container.md'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'4'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading m={'auto'} mb={'5'} color={'blue.700'}>Welcome Back</Heading>
                <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'} />
                <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple.500'} />
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={"/forgetPassword"}>Forget Password</Link>
                </Button>
                <Button type={'submit'} colorScheme={'purple'}>Log In</Button>
                <Text textAlign={'right'}>
                    New User?{'  '}
                    <Button variant={'link'} colorScheme={'purple'}>
                        <Link to={"/SignUp"}>Sign Up</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default LogIn
