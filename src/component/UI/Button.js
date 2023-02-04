import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onShow} className={`rounded-lg px-2 py-1 text-base text-white ${props.customStyle} ${props.bgColor} hover:opacity-80`}>{props.children}</button>
  )
}

export default Button
