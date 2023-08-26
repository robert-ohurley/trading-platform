import React from 'react'

export const Sidebar = () => {
  return (
    <div className="bg-white p-5 h-screen absolute mt-16 ">
      <ul className="">
        <li className="my-20">

        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer">
          <img src="/icon5.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer">
          <img src="/icon1.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer">
          <img src="/icon2.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer">
          <img src="/icon3.svg" height={30} width={30} color="white" />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer">
          <img src="/icon4.svg" height={30} width={30} />   
        </li>
      </ul>
    </div>
  )
}
