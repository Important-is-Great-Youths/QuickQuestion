import { instance } from '@/lib/axios'

export const getWeather = async (
  baseDate: string,
  baseTime: string,
  nx: number,
  ny: number
) => {
  const res = await instance.get(
    `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`
  )
  return res
}
