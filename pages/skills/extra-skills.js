import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'
import { SkillsCarousel } from '../../components/carousel'

const skills = [
  {
    src: '/icons/terminal.png',
    alt: 'Terminal'
  },
  {
    src: '/icons/git.png',
    alt: 'Git'
  },
  {
    src: '/icons/jira.png',
    alt: 'Jira'
  },
  {
    src: '/icons/ai.png',
    alt: 'Adobe Illustrator'
  }
]

const ExtraSkills = () => {
  return (
    <SkillsCarousel>
      {skills.map((s, id) => {
        return (
          <motion.div
            key={id}
            className="item-carousel"
            style={{
              minHeigth: '200px',
              minWidth: '200px',
              maxHeigth: '200px',
              maxWidth: '200px'
            }}
          >
            <Image src={s.src} alt={s.alt} w="100%" h="100%" />
          </motion.div>
        )
      })}
    </SkillsCarousel>
  )
}

export default ExtraSkills