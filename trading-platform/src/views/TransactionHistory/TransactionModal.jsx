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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function TransactionModal({ transaction, viewTransaction, setViewTransaction}) {

  return (
    <div className="absolute">

      <BootstrapDialog
        onClose={() => setViewTransaction(false)}
        aria-labelledby="customized-dialog-title"
        open={viewTransaction}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {transaction.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setViewTransaction(false)}
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
            <img src={transaction.image} />
          <Typography gutterBottom sx={{ fontSize:"2rem", marginTop:"1rem" }} >
            {transaction.dollarValue}  
          </Typography>

        <div className="flex justify-center w-full">
            <p className="mr-2 " >Transaction Date: </p>
            <p>{transaction.date}</p>
        </div>

        <div className="flex justify-start w-full mt-5 ">
            <p className="mr-2 font-bold"  >From: </p>
            <p>0699999cf1046e68e36E1aA2E0E07105eDDD1f08E</p>
        </div>

        <div className="flex justify-start w-full">
            <p className="mr-2 font-bold" >To: </p>
            <p>{transaction.wallet}</p>
        </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}