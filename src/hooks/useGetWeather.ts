import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useQuery } from '@tanstack/react-query'

import { getWeather } from '@/apis/getWeather'
import { useBaseDate, useBaseTime } from '@/hooks/useDateAndTime'
import useGetGeolocation from '@/hooks/useGetGeolocation'
import { useLonLatToXY } from '@/hooks/useLonLatToXY'

const useGetWeather = () => {
  const { setTheme } = useTheme()

  const dateSlot = useBaseDate()
  const timeSlot = useBaseTime()
  const { longitude, latitude } = useGetGeolocation()
  const { x, y } = useLonLatToXY(longitude, latitude)

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(dateSlot, timeSlot, x, y),
    enabled: !!timeSlot
  })

  const obsrValueCode = data?.data.response?.body?.items.item[0].obsrValue

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
    const linkTag = document.querySelector('link[rel="icon"]')
    if (linkTag) {
      linkTag.setAttribute(
        'href',
        `/assets/images/logo-${getWeatherCode(obsrValueCode)}.png`
      )
    } else {
      const newlinkTag = document.createElement('link')
      newlinkTag.rel = 'icon'
      newlinkTag.href = `/assets/images/logo-${getWeatherCode(obsrValueCode)}.png`
      document.head.appendChild(newlinkTag)
    }
  }, [data])
}

export default useGetWeather
