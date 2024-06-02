import { useLonLatToXY } from '@/hooks/useLonLatToXY'
import { useEffect, useState } from 'react'

// useLonLatToXY(126.851519444444, 37.3179) == {x: 58, y: 121}

const TestComponent: React.FC = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const lon = parseFloat(num1)
    const lat = parseFloat(num2)
    setResult(useLonLatToXY(lon, lat))
  }, [num1, num2])

  return (
    <div>
      <div>
        <label htmlFor="lon">Lon : </label>
        <input
          name="lon"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lat">Lat : </label>
        <input
          name="lat"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <p>
        X : {result.x} | Y : {result.y}
      </p>
    </div>
  )
}

export default TestComponent
