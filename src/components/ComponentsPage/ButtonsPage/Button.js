import React from 'react'

const Button = ({ btnClass, iconClass }) => {
  return (
    <a href="#" className={btnClass} style={{ marginLeft: '4px' }}>
      <i className={iconClass}></i>
    </a>
  )
}

export default Button
