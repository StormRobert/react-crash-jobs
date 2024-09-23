import React from 'react'

// creating a child component
const card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md` }>{children}</div>
  )
}

export default card