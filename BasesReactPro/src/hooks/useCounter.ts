import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const useCounter = ({ maxCount = 10 }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tl = useRef(gsap.timeline())

  const handleIncrement = () => {
    setCount(prevCount => {
      if (prevCount >= maxCount) {
        console.log('llego al maximo')
        return maxCount
      }
      return prevCount + 1
    })
  }

  useLayoutEffect(() => {
    tl.current.pause()
    if (count === maxCount && countRef.current) {
      tl.current.fromTo(
        countRef.current,
        { y: -10, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
    if (titleRef.current) {
      tl.current.fromTo(
        titleRef.current,
        { y: -10, opacity: 0.7 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [])

  useEffect(() => {
    tl.current.play(0)
  }, [count])

  return {
    count,
    countRef,
    titleRef,
    handleIncrement
  }
}
