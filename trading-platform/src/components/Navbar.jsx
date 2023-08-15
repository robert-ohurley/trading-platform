import React from 'react'

export const Navbar = () => {
  return (
    <div className="w-full h-16 bg-slate-500 flex items-center justify-between">
         {/* cryptobrotha  */}
         <div className="bg-purple-500 w-52 h-10 flex items-center justify-center ml-8 rounded-lg">
          <img></img>
          <p className="font-extrabold text-2xl p-3">CRYPTOBROTHA</p>
         </div>


      <div className="flex items-center justify-between w-56 mr-8">

        <div className="my-8 p-2 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/navicon.svg" height={20} width={20} />   
        </div>
        <div className="flex items-center justify-center hover:bg-slate-400 p-2 rounded-lg">
          <img src="/public/profileicon.jpg" width={40} height={20} className="mr-3 rounded-full"/>
          <p className=" text-slate-300 font-bold ">Afzal Hassan</p>
        </div>
      </div>

    </div>
  )
}
