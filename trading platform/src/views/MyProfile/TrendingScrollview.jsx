import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TrendingNftCard from './TrendingNftCard';
import forSaleData from '../../data/forSaleNfts';

const Item = styled(Paper)(({ theme, search }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TrendingScrollview({ search }) {
  return (
    <>
      {forSaleData.filter(nft => nft.name.toLowerCase().includes(search.toLowerCase())).map((nft, idx) =>
        <TrendingNftCard key={idx} idx={idx} nft={nft} />
      )}
    </>
  );
}