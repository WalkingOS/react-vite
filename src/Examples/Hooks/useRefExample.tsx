import { useEffect, useRef } from 'react'

export const MyFirstRef = () => {
  const myRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const a = focusManagement(myRef.current as HTMLElement)

    return () => {
      a()
    }
  }, [])

  return (
    <div>
      <button ref={myRef}>I need some color</button>
      <button
        onClick={() => {
          console.log(myRef)
          if (myRef.current) myRef.current.focus()
        }}
      >
        Change Color
      </button>
    </div>
  )
}

/* export const MyFirstRef = () => {
  const obj = {}
  const myRef = useRef(obj)

  console.log(myRef)‚

  return (
    <div>
      <div>I need some color</div>
      <button
        onClick={() => {
          console.log(myRef.current === obj)
          console.log(obj)

          myRef.current.a = 'c'
        }}
      >
        {myRef.current.a}
      </button>
    </div>
  )
} */

const focusManagement = (element: HTMLElement) => {
  const handleFocus = () => {
    console.log('test')
  }

  element.addEventListener('focus', handleFocus)

  return () => {
    element.removeEventListener('focus', handleFocus)
  }
}
