import { useState, useEffect } from 'react'

function useTimeSlot() {
  const [timeSlot, setTimeSlot] = useState<string>('')

  useEffect(() => {
    const updateTimeSlot = () => {
      const currentHour = new Date().getHours()

      const formattedTimeSlot =
        currentHour === 0
          ? '2300'
          : currentHour < 11
            ? `0${currentHour - 1}00`
            : `${currentHour - 1}00`
      setTimeSlot(formattedTimeSlot)
    }

    updateTimeSlot()
    const intervalId = setInterval(updateTimeSlot, 60000)

    return () => clearInterval(intervalId)
  }, [])

  return timeSlot
}

export default useTimeSlot
