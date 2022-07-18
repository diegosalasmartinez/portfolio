import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'
import { SkillsCarousel } from '../../components/carousel'

const skills = [
  {
    src: '/icons/figma.png',
    alt: 'Figma'
  },
  {
    src: '/icons/git.png',
    alt: 'Git'
  },
  {
    src: '/icons/react.png',
    alt: 'React'
  },
  {
    src: '/icons/html.png',
    alt: 'Html'
  },
  {
    src: '/icons/css.png',
    alt: 'Css'
  }
]

const FrontSkills = () => {
  return (
    <SkillsCarousel>
      {skills.map((s, id) => {
        return (
          <motion.div
            key={id}
            className="item-carousel"
            style={{ minHeigth: '200px', minWidth: '200px', maxHeigth: '200px', maxWidth: '200px'}}
          >
            <Image src={s.src} alt={s.alt} w="100%" h="100%" />
          </motion.div>
        )
      })}
    </SkillsCarousel>
  )
}

export default FrontSkills
