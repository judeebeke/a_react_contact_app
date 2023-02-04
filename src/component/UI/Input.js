import React from 'react'

const Input = (props) => {
  return (
    <input type={props.type} value={props.value} onChange={props.onChange} name={props.name} className="px-2 py-1 border-0 rounded text-md placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-200 w-10/12 sm:w-auto" placeholder={props.placeholder} 
    reqired={props.required} />
  )
}

export default Input
