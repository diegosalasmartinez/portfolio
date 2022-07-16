import { motion } from 'framer-motion'
import { Box, chakra, Heading, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const TextChanging = styled.span`
  border-right: 0.1em solid #666;
  border-color: rgba(255, 255, 255, 0.92);
`
const StyledImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(200 - Math.random() * 15)
  const toRotate = [
    'Fullstack Developer.',
    'Informatic Engineer.',
    'Web Developer.'
  ]

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    setText(updatedText)

    if (isDeleting) {
      // setDelta(150 - Math.random() * 15)
      // setDelta(prevDelta => prevDelta / 1.025);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(600)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(prevLoopNum => prevLoopNum + 1)
      setDelta(600)
    } else {
      if (delta > 500) {
        setDelta(200 - Math.random() * 15)
      }
    }
  }

  return (
    <Box p={2} my={6} display="flex">
      <Box minH={140} w="60%">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Heading as="h1">
            Hello,
            <br></br>
            I&apos;m <span style={{ color: '#81E6D9' }}>Diego Salas</span>.
            <br></br>
            <TextChanging width="auto">{text}</TextChanging>
          </Heading>
        </motion.div>
      </Box>
      <Box
        w="40%"
        zIndex={-1}
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <motion.div
          style={{ x: 0 }}
          animate={{
            x: -140,
            rotate: 30
          }}
          transition={{
            delay: 1,
            duration: 4,
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
      </Box>
    </Box>
  )
}

export default Hero
