import React from 'react'
import { useState } from 'react'
import TransactionModal from './TransactionModal';

function TransactionCard({ transaction, idx }) {
    let bgColor = idx % 2 == 0 ? "bg-slate-50" : "bg-slate-100"
    const [viewTransaction, setViewTransaction] = useState(false);

  return (
    <>
    <div onClick={() => setViewTransaction(true)} className={"h-24 overflow-hidden flex items-center justify-center  hover:-translate-y-1 hover:scale-105 duration-200 hover:cursor-pointer hover:bg-slate-200 " + bgColor}>
        <div className="flex flex-row w-50rem justify-between items-center">
            <div className="flex flex-col items-center ml-4 ">
                <p>{transaction.date}</p>
            </div>
            <div className="flex flex-row items-center justify-center ">
                <img src={transaction.image} width={50} height={50} />
                <div className="flex flex-col ml-5">
                    <p className="text-lg font-bold">{transaction.name}</p>
                    <p className="text-sm text-gray-500 ">Transfer to {transaction.wallet}</p>
                </div>
            </div> 
            <div className="flex flex-row items-center">
                <p className="font-medium text-sm text-gray-700">{transaction.dollarValue} </p>
            </div>
        </div>
    </div>
    { viewTransaction && <TransactionModal transaction={transaction} viewTransaction={viewTransaction} setViewTransaction={setViewTransaction} /> }
    </>
  )
}

export default TransactionCard