import { useCallback } from 'react'

type Tags = 'beige' | 'purple' | 'blue' | 'green'

const useChangeTagName = () => {
  const getTagName = useCallback((tag: Tags) => {
    switch (tag) {
      case 'beige':
        return '학문'
      case 'purple':
        return '연예'
      case 'blue':
        return '게임'
      case 'green':
        return '기타'
    }
  }, [])
  return getTagName
}

export default useChangeTagName
