import { Global } from '@emotion/react'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const SkillsCarousel = ({ children }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [carousel])

  const compareWidth = () => {
    if (width === 0) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        onDrag={compareWidth}
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export const CarouselStyle = () => (
  <Global
    styles={`
      .carousel {
        cursor: grab;
        overflow-x: hidden;
      }

      .inner-carousel {
        display: flex;
      }
      
      .item-carousel {
        margin-right: 0px;
      }

      .item-carousel img {
        pointer-events: none;
      }
    `}
  />
)
