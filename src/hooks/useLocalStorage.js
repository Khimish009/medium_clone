import { useState, useEffect } from "react"

export default (key, initailState = '') => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initailState
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}