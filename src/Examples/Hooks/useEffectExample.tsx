import { useEffect, useState } from 'react'

export const MyFirstUseEffect = () => {
  // eslint-disable-next-line prefer-const
  useEffect(() => {
    // This code runs when the component mounts
    console.log('mounted')

    // Return a cleanup function
    return () => {
      console.log('unmounted')

      // This code runs when the component unmounts
      // You can perform cleanup tasks here
      // with this pattern we avoid side effects
    }
  }, []) // Empty dependency array means the effect runs only on mount
  // We can add a value or multiple values to the dependency array. In this case this hook would run again when the value(s) changed

  return <>{/* Component content */}USEFFECT</>
}

export const MousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // when you need browser function or stuff from the document object or window object
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    // document.querySelector()

    return () => {
      // eventListener is a nice example. You should remove them when dont need themn
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      <p>Position:</p>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  )
}

interface IData {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const FetchExample = () => {
  // <IData | null> -> Generics (typescript)
  const [data, setData] = useState<IData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // debouncing
    // timeout
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/1')
        const result: IData = await response.json()
        setTimeout(() => {
          setData(result)
          setLoading(false)
        }, 2000)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    return () => {
      // clear timeout;
      // setData(null);
    }
  }, [])

  return <>{data && !loading ? <div>{data.title}</div> : <>LOADING</>}</>
}

// CUSTOM HOOKS?
