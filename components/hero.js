import { motion } from 'framer-motion'
import {
  Box,
  Heading,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import HeroImage from './hero-image'

const TextChanging = styled.span`
  padding-right: 1px;
  border-right: 0.1em solid #666;
`

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
  const width = useMediaQuery({ base: '50%', md: '80%' })

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
      setDelta(800)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(prevLoopNum => prevLoopNum + 1)
      setDelta(800)
    } else {
      if (delta > 500) {
        setDelta(200 - Math.random() * 15)
      }
    }
  }

  return (
    <Box p={2} my={6} display="flex">
      <Box w="60%">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Heading as="h1" w={width} mt={{ base: 4, md: 4 }}>
            Hello,
            <br></br>
            I&apos;m{' '}
            <span style={{ color: useColorModeValue('#319795', '#81E6D9') }}>
              Diego Salas
            </span>
            .<br></br>
            <TextChanging
              style={{ borderColor: useColorModeValue('#1A202C', '#EDEDEE') }}
            >
              {text}
            </TextChanging>
          </Heading>
        </motion.div>
      </Box>
      <Box
        w="40%"
        zIndex={-1}
        flexShrink={0}
        mt={{ md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <HeroImage />
      </Box>
    </Box>
  )
}

export default Hero
