import React from 'react'

export const Sidebar = () => {
  return (
    <div className="border bg-slate-200 w-max p-3 h-screen flex justify-around">
      <ul className="">
        <li className="my-20">

        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/icon5.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/icon1.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/icon2.svg" height={30} width={30} />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/icon3.svg" height={30} width={30} color="white" />   
        </li>
        <li className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400">
          <img src="/public/icon4.svg" height={30} width={30} />   
        </li>
      </ul>
    </div>
  )
}
