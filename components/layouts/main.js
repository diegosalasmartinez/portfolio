import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Hero from '../hero'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} sx={{ overflowX: 'hidden' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Diego's homepage" />
        <meta name="author" conteent="Diego Salas" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Diego Salas" />
        <meta name="og:title" content="Diego Salas" />
        <meta property="og:type" content="website" />
        <title>Diego Salas - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14} px={2}>
        <Hero />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
