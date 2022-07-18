import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="PokeGuide">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Title>PokeGuide</Title>
          <Paragraph>
            Inspired on Pokedex, this app shows you all the information related to pokemons (and his evoluions), items and berries you can find in the game.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Web page</Meta>
              <Link href="https://diegosalas-pokeguide.web.app/pokedex" target="_blank">
              https://diegosalas-pokeguide.web.app/pokedex
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>React</span>
            </ListItem>
          </List>
          <WorkImage src="/images/pokeguide.png" alt="PokeGuide" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
