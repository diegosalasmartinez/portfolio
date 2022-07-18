import { SkillsCarousel } from '../../components/carousel'
import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'

const skills = [
  {
    src: '/icons/spring.png',
    alt: 'Spring'
  },
  {
    src: '/icons/node.png',
    alt: 'NodeJS'
  },  
  {
    src: '/icons/express.png',
    alt: 'Express'
  },
  {
    src: '/icons/python.png',
    alt: 'Python'
  }
]

const BackSkills = () => {
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

export default BackSkills
