import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Skills = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
            Front-end
          </Heading>{' '}
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              {/* <WorkGridItem id="antisocial" title="Antisocial" thumbnail={thumbWork}>
                  Esta es mi primera aplicacion
                </WorkGridItem> */}
            </Section>
            <Section>
              {/* <WorkGridItem id="health-care" title="Health Care" thumbnail={thumbWork}>
                  Esta es mi segunda aplicacion
                </WorkGridItem> */}
            </Section>
            <Section>
              {/* <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbWork}>
                  Esta es mi tercera aplicacion
                </WorkGridItem> */}
            </Section>
          </SimpleGrid>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
            Back-end
          </Heading>{' '}
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              {/* <WorkGridItem id="antisocial" title="Antisocial" thumbnail={thumbWork}>
                  Esta es mi primera aplicacion
                </WorkGridItem> */}
            </Section>
            <Section>
              {/* <WorkGridItem id="health-care" title="Health Care" thumbnail={thumbWork}>
                  Esta es mi segunda aplicacion
                </WorkGridItem> */}
            </Section>
            <Section>
              {/* <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbWork}>
                  Esta es mi tercera aplicacion
                </WorkGridItem> */}
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
