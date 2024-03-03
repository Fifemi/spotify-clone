import React from 'react'
import './Button.css'

const Button = ({title, type}) => {
  return (
    <button className={type}>{title}</button>
  )
}

export default Button