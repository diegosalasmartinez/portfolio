import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'
import { SkillsCarousel } from '../../components/carousel'

const skills = [
  {
    src: '/icons/react.png',
    alt: 'React'
  },
  {
    src: '/icons/next.png',
    alt: 'Next'
  },
  {
    src: '/icons/js.png',
    alt: 'JS'
  },
  {
    src: '/icons/html.png',
    alt: 'Html'
  },
  {
    src: '/icons/css.png',
    alt: 'CSS'
  },
  {
    src: '/icons/sass.png',
    alt: 'Sass'
  },
  {
    src: '/icons/figma.png',
    alt: 'Figma'
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

export default FrontSkills
