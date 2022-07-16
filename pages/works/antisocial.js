import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Antisocial">
      <Container maxW="container.md">
        <Title>Antisocial</Title>
        <Paragraph>
        A social page inspired on Twitter with create a post, search for categories, look for recommendations and more.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Social page</Meta>
            <Link href='https://www.google.com' target='_blank'>
              https://www.google.com
              <ExternalLinkIcon mx='2px'/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJS, MongoDB</span>
          </ListItem>
        </List>
        <WorkImage src='/images/logo-section.jpg' alt='Antisocial'/>
      </Container>
    </Layout>
  )
}

export default Work
