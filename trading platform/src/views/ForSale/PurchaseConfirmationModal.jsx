import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Select, MenuItem } from "@mui/material";
import { useTransactionsContext } from '../../contexts/transactionsContextProvider';
import { useState, useEffect } from 'react';
import useSnackbar from '../../hooks/useSnackbar';

import tradeEth, { requestBuyersWallet, requestSellersWallet } from '../../../solidity/trade';
import { addTradeToBlockchain, getTradesFromBlockchain } from '../../../solidity/interactWithContract';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function PurchaseConfirmationModal({ purchaseStage, setPurchaseStage, nft }) {
    const { addTransaction } = useTransactionsContext()
    const [ sellersWallet, setSellersWallet] = useState('')
    const [ selectedWallet, setSelectedWallet] = useState('')
    const [ buyersWallet, setBuyersWallet] = useState('')
    const addAlert = useSnackbar();

    useEffect(() => {
        requestSellersWallet().then(wallet => setSellersWallet(wallet))
        requestBuyersWallet().then(wallet => setBuyersWallet(wallet))
    }, [])

    async function addTransactionToDatabase(userId, transactionHash) {
        let res = await fetch('http://localhost:3001/transaction', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId: userId, transactionHash: transactionHash})
        })
        return res;
    }

    async function handleTrade() {
        let error = undefined;
        let tradesOnBlockchain = await getTradesFromBlockchain()
        console.log('trades', tradesOnBlockchain);

        
        //close modal
        setPurchaseStage({ buy: false, confirmBuy: false })

        //init transaction receipt
        let receipt;
        
        //add in progress transaction to local blockchain
        try {
            // addTransaction(receipt);
            await addTradeToBlockchain(nft.Name, buyersWallet, sellersWallet, nft.Price, nft.Img, '')
        } catch(e) {
            error = e;
            addAlert({severity: 'error', message: `Something went wrong updating local blockchain.`})
        }
        
        //transact the Ethereum
        try {
            receipt = await tradeEth(sellersWallet, nft.Price, nft.Name, nft.Img)
            // console.log('receipt', receipt)
        } catch (e) {
            error = e;
            addAlert({severity: 'error', message: `Something went wrong while transaction Eth.`})
        }
        
        
        //add extra record of transaction in local database
        try {
            await addTransactionToDatabase(1, receipt?.transactionHash);
        } catch(e) {
            error = e;
            addAlert({severity: 'error', message: `Something went wrong adding transaction to database.`})
        }

        tradesOnBlockchain = await getTradesFromBlockchain()
        console.log('trades', tradesOnBlockchain);


        //all goes well, indicate a successful transaction.
        if (error == undefined) {
            addAlert({severity: 'success', message: `Successfully purcased ${nft.Name} for ${nft.Price} eth.`})
        } else {
            addAlert({severity: 'success', message: `Transaction done but with error somewhere: ${error}`})
            console.log('error', error)
        }
    }
    

    return (
        <div className="absolute">

            <BootstrapDialog
                onClose={() => setPurchaseStage({ buy: false, confirmBuy: false })}
                aria-labelledby="customized-dialog-title"
                open={purchaseStage.confirmBuy}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {nft.Name}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setPurchaseStage({ buy: false, confirmBuy: false })}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers className='flex flex-col items-center justify-center mb-5'>
                    <img width={100} height={100} src={nft.Img} />
                    <Typography gutterBottom sx={{ fontSize: "2rem", marginTop: "1rem" }} >
                        {nft.Name} - {nft.Price}{ " eth"}
                    </Typography>
                    <Typography gutterBottom sx={{ marginTop: "" }}>
                        CONFIRM YOUR MARKETPLACE PURCHASE:
                    </Typography>
                    <div className="flex justify-center w-full">
                        <p className="mr-2 " >Date: </p>
                        {new Date().toLocaleString()}
                    </div>

                    <div className="flex justify-start items-center w-full mt-5 ">
                        <p className="mr-2 font-bold"  >From: </p>
                        <Select
                            sx={{
                                width: '350px',
                                marginBottom:"1rem",
                                color: 'black'
                            }}
                            onChange={(e) => setSelectedWallet(e.target.value)}
                        >
                            <MenuItem value={buyersWallet}>{buyersWallet}</MenuItem>
                        </Select>
                    </div>

                    <div className="flex justify-start w-full">
                        <p className="mr-2 font-bold" >To: </p>
                        <p>{sellersWallet}</p>
                    </div>

                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => setPurchaseStage({ buy: false, confirmBuy: false })} variant='outlined'>
                            Cancel
                        </Button>
                        <Button disabled={selectedWallet == ""} onClick={() => handleTrade()} variant='contained'>
                            Confirm Purchase
                        </Button>
                    </ButtonGroup>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
