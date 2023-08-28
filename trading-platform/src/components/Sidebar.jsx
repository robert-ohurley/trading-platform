import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'  
import { FaReceipt } from 'react-icons/fa'  
import { ImStatsBars} from 'react-icons/im'  
import { BsFillInfoCircleFill} from 'react-icons/bs'  



export const Sidebar = ({ handleViewChange, views }) => {
  return (
    <div className="bg-white p-5 h-screen absolute mt-16 ">
      <ul className="">
        <li className="my-20">

        </li>
        <li onClick={() => handleViewChange("forSale")} className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer flex items-center justify-center">
          <FaShoppingBag size={"2rem"} color={!views.forSale ? "gray" : "black"} />
        </li>
        <li onClick={() => handleViewChange("transactionHistory")} className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer flex items-center justify-center">
          <FaReceipt size={"2rem"} color={!views.transactionHistory ? "gray" : "black"} />
        </li>
        <li onClick={() => handleViewChange("charts")} className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer flex items-center justify-center">
          <ImStatsBars size={"2rem"} color={!views.charts ? "gray" : "black"} />
        </li>
        <li onClick={() => handleViewChange("info")} className="my-8 p-3 rounded-xl transition-colors hover:bg-slate-400 cursor-pointer flex items-center justify-center">
          <BsFillInfoCircleFill size={"2rem"} color={!views.info ? "gray" : "black"} />
        </li>
      </ul>
    </div>
  )
}
