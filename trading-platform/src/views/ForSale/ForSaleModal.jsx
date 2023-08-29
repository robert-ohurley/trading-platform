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

export default function ForSaleModal({ buy, setBuy, nft }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="absolute">

      <BootstrapDialog
        onClose={() => setBuy(false)}
        aria-labelledby="customized-dialog-title"
        open={buy}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {nft.name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setBuy(false)}
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
            <img src={nft.image} />
          <Typography gutterBottom sx={{ fontSize:"2rem", marginTop:"1rem" }} >
            {nft.dollarValue} / {nft.ethValue}
          </Typography>
          <Typography gutterBottom sx={{marginTop:""}}>
          Inspired by spiritual iconography like the Hamsa, {nft.name} draws attention to the power symbols hold in everyday life. The two works for this drop, specifically, highlight a playful and colorful corner of the series. As with many in the series, "smoke! haze!" and "where is my mind" are named after titles/lyrics of inspiring songs to the artist.
          </Typography>
          <Typography gutterBottom>
          “This piece is fun and free like the summer. The colors and textures I accomplished with these also really give a psychedelic energy and a sense of nature. I don’t use a lot of purples or pinks in my work, and my usual blues are mostly out of the picture here. I feel like this is the perfect vibe for an on-chain summer expression.”
          </Typography>

        </DialogContent>
        <DialogActions sx={{ display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"1rem"}}>
          <Button autoFocus onClick={() => setBuy(false)} variant='contained'>
            Buy Now 
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}