import '@rainbow-me/rainbowkit/styles.css'
import { ConnectButton, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { AppBar, Box, Container, Grid, IconButton,  Menu, MenuItem, ThemeProvider,  Toolbar,  Typography,  createTheme, responsiveFontSizes } from '@mui/material'

import { chains, client } from '../wagmi'

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
const theme = createTheme({
 
  typography: {
    fontFamily: ['"zcool-kuaile"', 'poppins'].join(','),
    h1: {
     fontFamily: '"zcool-kuaile", sans-serif',
    },
    h2: {
      fontFamily: '"poppins", sans-serif',
     }
  }
  
})
const pages = [{text:'HOME',href:"/"},{text:'DOCS',href:"https://docs.cootiedocs.xyz/"}, {text:'STAKING',href:"/staking"}, {text:'SWAP',href:"/swap"}];

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};
  return (
    <WagmiConfig client={client}><ThemeProvider theme={responsiveFontSizes(theme)}>

      <RainbowKitProvider chains={chains}>
        <NextHead>
          <title>TheCooties</title>
          <link href="https://fonts.cdnfonts.com/css/zcool-kuaile" rel="stylesheet"/>
    <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
     
        </NextHead>
         <div
      style={{
        backgroundImage: `url(${"https://cdn.discordapp.com/attachments/907590324627595284/1076218522100826182/blockchain_2.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
        margin:-8
      }}
    >   
        <AppBar style={{backgroundColor:'#161A42',height:85}} position="static">
    <Container style={{marginTop:5}} maxWidth="xl">
      <Toolbar disableGutters>
       
        <div
    style={{
      backgroundImage: `url(${"https://bafkreiad3ksqpxasuooqbtq4f6mbzotub6ybxpm25y6nl2t5uf44btvx4y.ipfs.nftstorage.link/"})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '60px',
      minHeight: '60px',
      margin:-8,
      marginLeft:5,
      marginRight:20,
    }}
  />
       

        <Box sx={{ flexGrow: 1,  display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
           
          </Menu>
        </Box>
  
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page,i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                {page.text==="DOCS"? 
                    <Link key={page.text} href={page.href}>
                        <Typography key={page.text} color="white" textAlign="center">                 
                    {page.text}
                  </Typography>
                </Link> 
                : page.text==="SWAP"?
                <a > <Link key={page.text} href={page.href}> 
                 <Typography key={page.text} color="white" textAlign="center">
                 {page.text}
                   </Typography>
                  </Link> </a> :
                 <Link key={page.text} href={page.href}> 
                  <Typography key={page.text} color="white" textAlign="center">
                  {page.text}
                    </Typography>
                   </Link> 
                }
                          

                </MenuItem>
              ))}
        </Box>

        <ConnectButton />
       
      </Toolbar>
    </Container>
  </AppBar>
        {mounted && <Component {...pageProps} />}
        <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#161A42",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" justifyContent={"center"}textAlign={"center"} alignItems={"center"} >
            Cootie Finance cannot and does not contain financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional financial advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial advice.
            </Typography>
          </Grid>
          <Grid marginTop={5} item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | The Cooties Finance.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
   </div>
   
      </RainbowKitProvider>
  </ThemeProvider>
    </WagmiConfig>
    
  )
}

export default App
