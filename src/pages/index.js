import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { Flex, Heading, chakra, Image } from "@chakra-ui/react"
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { motion, isValidMotionProp } from 'framer-motion';
import sanityClient from './../../client'
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});


const  Home  = () => {

    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
          title,
          slug
        }`).then(data => console.log(data))
        .catch(e => console.log(e))
    }, [])

  return <Flex flexDir="column">
    
    <Heading color='gray.300'  size='4xl'>Digital Banking Solution for Personal & Business needs</Heading>
    <Heading fontSize={"1rem"} size='2xl'>The bank for a changing world.     <FaBeer />
</Heading>
    <ChakraBox
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        width="12"
        height="12"
        display="flex"
      />

      <Image src="https://cdn.britannica.com/93/173193-131-3EE3B458/Nelson-Mandela-South-African.jpg" />
    <Link to="/contact">Contact waya</Link>
    </Flex>
}


export default Home