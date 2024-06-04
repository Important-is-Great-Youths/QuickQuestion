import { useState, useEffect } from 'react'

const useGetGeolocation = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  useEffect(() => {
    const fetchGeolocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          setLocation({ latitude, longitude })
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
        },
        (error) => {
          console.error('Error:', error)
        }
      )
    }

    fetchGeolocation()
  }, [])

  return location
}

export default useGetGeolocation
