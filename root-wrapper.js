import { ChakraProvider } from '@chakra-ui/provider'
import React from 'react'

import theme from './src/@chakra-ui/gatsby-plugin/theme'
import {AnimatePresence} from 'framer-motion';

export const wrapRootElement = ({element}) => {


    return(
        <ChakraProvider theme={theme} resetCSS={resetCSS} portalZIndex={portalZIndex}>
          <AnimatePresence exitBeforeEnter>

        {element}
          </AnimatePresence>
      </ChakraProvider>
      
    )
}