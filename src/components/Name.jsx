import React from 'react'
import { useSelector } from 'react-redux'

const Name = () => {
    const name=useSelector(store=>store.app.name)
  return (
    <div>{name}</div>
  )
}

export default Name