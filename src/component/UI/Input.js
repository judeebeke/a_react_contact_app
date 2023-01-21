import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} name={props.name} className="px-2 py-1 border-0 rounded text-md placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-200" placeholder={props.placeholder} />
  )
}

export default Input
