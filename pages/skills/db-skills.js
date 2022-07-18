import { motion } from 'framer-motion'
import { Image } from '@chakra-ui/react'
import { SkillsCarousel } from '../../components/carousel'

const skills = [
  {
    src: '/icons/mongo.png',
    alt: 'MongoDB'
  },
  {
    src: '/icons/postgresql.png',
    alt: 'PostgreSQL'
  },
  {
    src: '/icons/mysql.png',
    alt: 'MySQL'
  },

]

const DBSkills = () => {
  return(
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

export default DBSkills