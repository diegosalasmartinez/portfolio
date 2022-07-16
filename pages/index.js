import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I started programming in C when I was 15 years old. Since then, I
            was very interested in the development world. Now I&apos;m studying
            Informatics Engineering and what I like the most is bringing ideas
            to reality in the most simplest, useful and attractive way.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Lima, Perú.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Was part of{' '}
            <Link
              href="https://www.huawei.com/minisite/seeds-for-the-future/index.html"
              target="_blank"
            >
              Huawei - Seeds For The Future Program
            </Link>
            . Had the{' '}
            <Link
              href="https://puntoedu.pucp.edu.pe/vida-estudiantil/estudiantes-pucp-participaron-en-el-programa-internacional-de-huawei/?fbclid=IwAR1wTlc-KmxX6LfVXNajb821fM_jbx22nwNgZY5I4viMY4B1fKnU6uUnJgk"
              target="_blank"
            >
              opportunity
            </Link>{' '}
            to experience how theory becomes reality by practicing in Huawei
            labs and training centers.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at{' '}
            <Link href="https://www.fractal.com.pe/" target="_blank">
              Fractal
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Degree in Informatics Engineering at{' '}
            <Link href="https://www.pucp.edu.pe/" target="_blank">
              Pontificia Universidad Católica del Perú
            </Link>
            .
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/diegosalasmartinez"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @diegosalasmartinez
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/diego-alejandro-salas-martinez/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @diego-alejandro-salas-martinez
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
