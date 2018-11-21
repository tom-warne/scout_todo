import React, { Component } from 'react'

const List = ({children}) => {
  const outerStyles = {
    padding: '20px',
    border:  'solid 1px black',
    borderRadius: '5px',
    backgroundColor: 'rgb(250, 250, 225)'
  }

  return(
    <div style={outerStyles}>
      {children}
    </div>
  )
}

export default List
