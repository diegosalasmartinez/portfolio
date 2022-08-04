import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Antisocial">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Title>Antisocial</Title>
          <Paragraph>
            A social page inspired on Twitter with a lot of features like create
            a post, search for categories, look for recommendations and more.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Social page</Meta>
              <Link
                href="https://diegosalas-antisocial.web.app"
                target="_blank"
              >
                https://diegosalas-antisocial.web.app
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>React, NodeJS, MongoDB</span>
            </ListItem>
            <ListItem>
              <Meta>GitHub</Meta>
              <Link
                href="https://github.com/diegosalasmartinez/antisocial"
                target="_blank"
              >
                https://github.com/diegosalasmartinez/antisocial
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <WorkImage src="/images/antisocial.png" alt="Antisocial" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
