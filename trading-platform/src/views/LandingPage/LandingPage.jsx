import React from 'react'
import LoginButtonGroup from './LoginButtonGroup'

function LandingPage() {
  return (
    <>
        <div className="w-screen h-screen bg-cryptobrotha-purple relative overflow-hidden">
            <div className="relative top-1/2">
              <LoginButtonGroup />
            </div>

            <h1 className="font-extrabold text-9xl absolute ml-50rem mt-16">CRYPTO</h1>
            <h1 className="font-extrabold text-9xl absolute ml-50rem mt-48">BROTHA</h1>
            <img src="/cryptobrotha.png" />
        </div>
    </>
  )
}

export default LandingPage