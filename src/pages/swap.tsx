

import type {
  SwapWidget as SwapWidgetType,
  Button as ButtonType,
  PangolinProvider as PangolinProviderType,
} from '@pangolindex/components';

import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/core/styles';

  import { useAccount } from 'wagmi'
import { Hero, Typography } from '@web3uikit/core';


export default function Swap() { 

  const PangolinProvider = dynamic(
    () => import('@pangolindex/components').then((module) => module.PangolinProvider) as any,
    { ssr: false },
  ) as typeof PangolinProviderType;
  const SwapWidget = dynamic(() => import('@pangolindex/components').then((module) => module.SwapWidget) as any, {
    ssr: false,
  }) as typeof SwapWidgetType;
  
  const useStyles = makeStyles((theme :any)=> ({
    root: {
      width: '100%',
      height: '100%',
      position: 'relative',
      '& video': {
        objectFit: 'cover',
      },
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    title: {
      paddingBottom: theme.spacing(4),
    },
  }));
  
  
  

  const { address } = useAccount()

  const classes = useStyles();
  return (
    <div
      style={{
        backgroundImage: `url(${"https://cdn.discordapp.com/attachments/907590324627595284/1076218522100826182/blockchain_2.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
        margin:-8,
        alignItems:"center"

      }}
    > <div
    style={{
      paddingTop:100,
      display: 'flex',
      flexDirection: 'column',
      alignItems:"center",
      width:"100%",
    }}
  >

<Typography fontFamily={"poppins"} color="white"   variant="h1"  component="h1"  className={classes.title}>
            Token Swap
            </Typography>
      <div
    style={{
      paddingTop:20,
      paddingBottom:100,
      display: 'flex',
      width:"40%",
      alignSelf:"center",
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
    {address??''.toString().length>0?
    <PangolinProvider account={address} chainId={19} library={""}>
	  <SwapWidget isLimitOrderVisible={false} />
    </PangolinProvider> :null}

  </div>
</div>
 
   </div>

  )
}
