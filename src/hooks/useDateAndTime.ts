import { useState, useEffect } from 'react'

export const useBaseDate = () => {
  const date = new Date()
  date.setHours(date.getHours() - 1)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const dateSlot = `${year}${month}${day}`
  return dateSlot
}

export const useBaseTime = () => {
  const [timeSlot, setTimeSlot] = useState<string>('')

  useEffect(() => {
    const updateTimeSlot = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()

      let nextHour =
        currentMinute >= 40 ? currentHour : (currentHour - 1 + 24) % 24
      let formattedTimeSlot = nextHour < 10 ? `0${nextHour}00` : `${nextHour}00`

      setTimeSlot(formattedTimeSlot)
    }

    updateTimeSlot()
    const intervalId = setInterval(updateTimeSlot, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return timeSlot
}
