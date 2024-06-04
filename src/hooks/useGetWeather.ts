import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useQuery } from '@tanstack/react-query'

import { getWeather } from '@/apis/getWeather'
import { useBaseDate, useBaseTime } from '@/hooks/useDateAndTime'
import { useLonLatToXY } from '@/hooks/useLonLatToXY'

const useGetWeather = () => {
  const { setTheme } = useTheme()

  const dateSlot = useBaseDate()
  const timeSlot = useBaseTime()
  const { x, y } = useLonLatToXY(126.980008333333, 37.5635694444444) // 임시값

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(dateSlot, timeSlot, x, y),
    enabled: !!timeSlot
  })

  const obsrValueCode = data?.data.response.body.items.item[0].obsrValue

  const getWeatherCode = (code: string) => {
    if (code === '1' || code === '2' || code === '5') {
      return 'rainy'
    } else if (code === '3' || code === '6' || code === '7') {
      return 'snowy'
    } else {
      return 'sunny'
    }
  }

  useEffect(() => {
    setTheme(getWeatherCode(obsrValueCode))
  }, [data])
}

export default useGetWeather
