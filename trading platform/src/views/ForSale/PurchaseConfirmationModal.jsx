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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function PurchaseConfirmationModal({ purchaseStage, setPurchaseStage, nft }) {

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
                        {nft.Price}{ " eth"}
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
                        >
                            <MenuItem value={'0x20Fa2e01715077a8aD73646666bF624b0bda1039'}>0x20Fa2e01715077a8aD73646666bF624b0bda1039</MenuItem>
                            <MenuItem value={'0x2bFf581CAF0ad8573F494B9823b7C6f1d4f7b0CB'}>0x2bFf581CAF0ad8573F494B9823b7C6f1d4f7b0CB</MenuItem>
                            <MenuItem value={'0xAa93053b6B1432FeF022C417a38cd47ca378Ac85'}>0xAa93053b6B1432FeF022C417a38cd47ca378Ac85</MenuItem>
                            <MenuItem value={'0x2B6c674e016849e543336Ee2d1d292503b3b5119'}>0x2B6c674e016849e543336Ee2d1d292503b3b5119</MenuItem>
                            <MenuItem value={'0x071b85Ca45fc345Bf80c1A04f1d60531B02Fdb7B'}>0x071b85Ca45fc345Bf80c1A04f1d60531B02Fdb7B</MenuItem>
                        </Select>
                    </div>

                    <div className="flex justify-start w-full">
                        <p className="mr-2 font-bold" >To: </p>
                        <p>06fk237943798327198692hk4731297712831f08E</p>
                    </div>

                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => setPurchaseStage({ buy: false, confirmBuy: false })} variant='outlined'>
                            Cancel
                        </Button>
                        <Button onClick={() => setPurchaseStage({ buy: false, confirmBuy: false })} variant='contained'>
                            Confirm Purchase
                        </Button>
                    </ButtonGroup>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
