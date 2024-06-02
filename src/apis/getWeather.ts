import { instance } from '@/lib/axios'

const getFormattedDate = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}${month}${day}`
}

// 임시 코드
const baseDate = getFormattedDate() // ex)20240603
const baseTime = '0600'
const nx = '63'
const ny = '126'

export const getWeather = async () => {
  const res = await instance.get(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`
  )
  return res
}
