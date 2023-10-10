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

export default function ForSaleModal({ purchaseStage, setPurchaseStage, nft }) {

  return (
    <div className="absolute">

      <BootstrapDialog
        onClose={() => setPurchaseStage({ buy: false, confirmBuy: false })}
        aria-labelledby="customized-dialog-title"
        open={purchaseStage.buy}
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
          <img src={nft.Img} />
          <Typography gutterBottom sx={{ fontSize: "2rem", marginTop: "1rem" }} >
            {nft.Name} - {nft.Price} { " eth"}
          </Typography>
          <Typography gutterBottom sx={{ marginTop: "" }}>
            {nft.Description}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
          <Button onClick={() => setPurchaseStage({ buy: false, confirmBuy: true })} variant='contained'>
            Buy Now
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
