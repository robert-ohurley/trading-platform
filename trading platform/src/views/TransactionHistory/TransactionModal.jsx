import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TiTickOutline } from 'react-icons/ti'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

//Modal which displays all the relevant transaction information
export default function TransactionModal({ transaction, viewTransaction, setViewTransaction }) {

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
          <Typography gutterBottom sx={{ fontSize: "1.5rem", marginTop: "1rem" }} >
            0.000658968018810737 ETH ($1.08)
          </Typography>

          <div className="flex justify-center w-full">
            <p className="mr-2 " >Timestamp: </p>
            <p>11 secs ago (Sep-01-2023 08:34:23 PM +UTC)</p>
          </div>

          <div className="flex justify-start w-full mt-5 ">
            <p className="mr-2 font-bold"  >From: </p>
            <p>0699999cf1046e68e36E1aA2E0E07105eDDD1f08E</p>
          </div>

          <div className="flex justify-start w-full">
            <p className="mr-2 font-bold" >To: </p>
            <p>{transaction.wallet}</p>
          </div>
          <div className="flex justify-start flex-col w-full mt-5">
            <p className="mr-2 font-bold" >Transaction Hash: </p>
            <p>0x59489f6221dc4db7e8fd9c155c797dddcbc34ed1fa4e746eccf4569f7dbf142f </p>
          </div>
          <div className="flex justify-start items-center w-full mt-5 ">
            <p className="mr-2 font-bold" >Status: </p>
            <button className="border p-1.5 bg-button-light-green rounded-lg flex">
              <TiTickOutline className="mt-0.5 mr-1" />
              <p className="text-button-green font-medium">Success</p>
            </button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}