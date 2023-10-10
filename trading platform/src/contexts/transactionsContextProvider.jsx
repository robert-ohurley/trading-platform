import { useContext, createContext, useState } from 'react';

const transactionsContext = createContext();

export const TransactionsContextProvider = ({children}) => {
    const [transactions, setTransactions] = useState([])

    const addTransaction = (receipt) => {
        setTransactions((prevState) => {
            return [
                ...prevState,
                receipt
            ]
        })
    }

    const getTransactions = () => {
        return transactions;
    }

    return (
        <transactionsContext.Provider value={{
            addTransaction,
            getTransactions
            }}>
            {children}
        </transactionsContext.Provider>
    )
}

export const useTransactionsContext = () => {
    return useContext(transactionsContext);
}


