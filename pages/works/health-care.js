import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
  return (
    <Layout title="Health Care">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Title>Health Care</Title>
          <Paragraph>
            A hospital admin app easy to use where you can place your
            appointments, manage your staff and users, get historic reports and
            more.
          </Paragraph>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Admin page</Meta>
              <Link
                href="https://diegosalas-healthcare.web.app"
                target="_blank"
              >
                https://diegosalas-healthcare.web.app
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
                href="https://github.com/diegosalasmartinez/health-care"
                target="_blank"
              >
                https://github.com/diegosalasmartinez/health-care
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
          <WorkImage src="/images/health-care.png" alt="Health Care" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
