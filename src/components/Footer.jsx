import React from 'react'
import {Box, Button, Heading, HStack, Input, Stack, Text, VStack} from '@chakra-ui/react';
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    subscribe to updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'} >
                    social media
                </Heading>
                <HStack py={'3'} >
                <Button bgColor={'blackAlpha.900'}  color={'red'} alignContent={'stretch'} p={'0'}>
                    <AiFillYoutube size={'40'}  />
                </Button>
                <Button bgColor={'blackAlpha.900'}  color={'purple'} alignContent={'stretch'} p={'0'}>
                    <AiFillInstagram size={'40'} />
                </Button>
                <Button bgColor={'blackAlpha.900'}  color={'blue'} alignContent={'stretch'} p={'0'} >
                    <AiFillTwitterCircle size={'40'} />
                </Button>
                </HStack>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer
