import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'

const Header = () => {
  const onClick = () => {
    console.log('Click')
  };
  return (
    <header>
      <a className="home" href="#">
      <Button onClick=
      {onClick}>

      </Button>
      </a>
    </header>
  )
}

export default Header