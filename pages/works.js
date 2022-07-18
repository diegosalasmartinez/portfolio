import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbWork from '../public/images/logo-section.jpg'
import thumbPokeGuide from '../public/images/pokeguide.png'

const Works = () => {
  return (
    <Layout>
      <Container maxW='container.md'>
        <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="antisocial" title="Antisocial" thumbnail={thumbPokeGuide}>
              Esta es mi primera aplicacion
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="health-care" title="Health Care" thumbnail={thumbWork}>
              Esta es mi segunda aplicacion
            </WorkGridItem>
          </Section> 
          <Section>
            <WorkGridItem id="pokeguide" title="PokeGuide" thumbnail={thumbPokeGuide}>
              Pokedex app where you can see pokemons, items and berries.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
