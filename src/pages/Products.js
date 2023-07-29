// material
import { CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
// components
import Page from '../components/Page';
import { ProductList } from '../sections/@dashboard/products';
// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {

  const [agents , setAgents] = React.useState([]);

  React.useEffect(()=>{
    axios.get('https://valorant-api.com/v1/agents').then((response) =>{
      setAgents(response.data.data);
      setLoading(false);
    });
  },[]);

  
  const [loading , setLoading] = React.useState(true);
  const [kelamaan , setkelamaan] = React.useState(false);
  const [Textkelamaan , setTextkelamaan] = React.useState('API-nya masih ngantuk nih bang, sabar ya.');

  setTimeout(() => {
    setkelamaan(true);
  }, 5000);

  setTimeout(() => {
    setTextkelamaan('Buset dah tidur lagi ini API-nya bang, maap.');
  }, 10000);

  return (
    <Page title="All Agents">
            {(loading)?
        <div style={{ width: '100%',marginTop: '30vh', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress color="inherit" />
          {(kelamaan)&&
            <Typography variant='h6'>
              {Textkelamaan}
            </Typography>
          }
        </div>
      :
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          All Agents
        </Typography>
          <ProductList products={agents} />
      </Container>
}
    </Page>
  );
}
