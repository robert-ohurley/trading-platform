import React from 'react'
import LoginButtonGroup from './LoginButtonGroup'

function LandingPage() {
  return (
    <>
        <div className="w-screen h-screen bg-cryptobrotha-purple relative overflow-hidden">
            <LoginButtonGroup />
            <h1 className="font-extrabold text-9xl mt-12 absolute ml-50rem mt-16">CRYPTO</h1>
            <h1 className="font-extrabold text-9xl mt-12 absolute ml-50rem mt-48">BROTHA</h1>
            <img src="/cryptobrotha.png" />
        </div>
    </>
  )
}

export default LandingPage