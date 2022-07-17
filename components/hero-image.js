import { motion } from 'framer-motion'
import { Box, chakra, Image } from '@chakra-ui/react'
import { memo } from 'react'

const StyledImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const HeroImage = () => {
  return (
    <motion.div
      initial={{ x: '20%', y: -30 }}
      animate={{
        x: 'calc(-40%)',
        y: 10,
        rotate: 30
      }}
      transition={{
        delay: 1,
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        rotate: {
          delay: 1,
          duration: 2,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }}
    >
      <Box w="220px" h="220px" display="inline-block" overflow="hidden">
        <StyledImage
          src="/images/header-img.svg"
          alt="Profile image"
          borderRadius="full"
          width="100%"
          height="100%"
        />
      </Box>
    </motion.div>
  )
}

export default memo(HeroImage)
