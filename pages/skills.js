import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import BackSkills from './skills/back-skills'
import FrontSkills from './skills/front-skills'

const Skills = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
            Front-end
          </Heading>{' '}
          <FrontSkills/>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
            Back-end
          </Heading>{' '}
          <BackSkills/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
