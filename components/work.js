import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }) => {
  return (
    <Box>
      <NextLink href="/works" passHref>
        <Link>Works</Link>
      </NextLink>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )
}

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}


export const Meta = ({ children }) => {
  return (
    <Badge colorScheme='green' mr={2}>
      {children}
    </Badge>
  )
}