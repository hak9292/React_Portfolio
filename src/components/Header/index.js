import React from 'react'

const Header = () => {
  const onClick = () => {
    console.log('Click')
  };
  return (

    <header className="masthead">
    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="mx-auto my-0">Hello.</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">Welcome to my portfolio.</h2>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header