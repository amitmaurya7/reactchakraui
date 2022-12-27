import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
}


const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.md'} minH={'100vh'} p="4" >
                <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
                    service
                </Heading>
                <Stack h="full" p={'4'} alignItems={'center'} direction={['column', 'row']} >
                    <Image src={img5} h={['40', '400']}  filter={'hue-rotate(-120deg)'}  />
                   <Text letterSpacing={'widest'} lineHeight={'190%'} >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu auctor neque. Nulla ac iaculis justo. Pellentesque scelerisque efficitur tempus. Donec a placerat magna. Donec diam dolor, mollis non ligula in, ultricies pretium velit. Mauris eget ligula quam. Pellentesque at libero quis leo laoreet
                    tempus. Donec a placerat magna. Donec diam dolor, mollis non ligula in, ultricies pretium velit. Mauris eget ligula quam. Pellentesque at libero quis leo laoreet
                   </Text>
            </Stack>
        </Container>
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <img src={img1} w={'full'} h={'100vh'} objectFit={'cover'}  />
            <Heading bgColor={'whiteAlpha.100'} color={'black'} {...headingOptions}>
                watch the future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img2} w={'full'} h={'100vh'} objectFit={'cover'}  />
            <Heading bgColor={'whiteAlpha.100'} color={'black'} {...headingOptions}>
                future is the gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img3} w={'full'} h={'100vh'} objectFit={'cover'}  />
            <Heading bgColor={'whiteAlpha.100'} color={'black'} {...headingOptions}>
                gaming on the console
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <img src={img4} w={'full'} h={'100vh'} objectFit={'cover'}  />
            <Heading bgColor={'whiteAlpha.100'} color={'black'} {...headingOptions}>
                night life is cool
            </Heading>
        </Box>
    </Carousel>
);



export default Home
