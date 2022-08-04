import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbAntisocial from '../public/images/antisocial.png'
import thumbHealthCare from '../public/images/health-care.png'
import thumbPokeGuide from '../public/images/pokeguide.png'

const Works = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="antisocial"
              title="Antisocial"
              thumbnail={thumbAntisocial}
            >
              A social page inspired on Twitter.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="health-care"
              title="Health Care"
              thumbnail={thumbHealthCare}
            >
              A hospital admin app easy to use.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="poke-guide"
              title="Poke Guide"
              thumbnail={thumbPokeGuide}
            >
              Pokedex app where you can see pokemons, items and berries.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
