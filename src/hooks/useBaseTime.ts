import { useState, useEffect } from 'react'

function useBaseTime() {
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

export default useBaseTime
