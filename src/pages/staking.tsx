
import { Box, Grid } from '@mui/material'
import { Button, Hero, Input, PlanCard, Typography } from '@web3uikit/core'
import { ethers } from 'ethers';
import * as React from 'react'
import { useContractWrite, useAccount,usePrepareContractWrite, useContractRead } from 'wagmi';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



export default function Staking() {  
  const { address:ethAddress} = useAccount()

  const [values, setValues] = React.useState<any>({
    amount: '0',
  });
  const { config:configv1 } = usePrepareContractWrite({
    address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
    abi: stakingABI,
    functionName: 'claimRewards',
      onSuccess(data) {	
  
      console.log('Success approve', data)
      },
      onError(data){
      
        console.log('error', data)
    }
  
    })  

    
  const { config :configCoot } = usePrepareContractWrite({
    address: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
    abi: masterDark,
    functionName: 'harvest',
    args:[0,ethAddress],
      onSuccess(data) {	
  
      console.log('Success deposit', data)
      },
      onError(data){
      
        console.log('error', data)
    }
  
    })  

  const { config, error } = usePrepareContractWrite({
  address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
  abi: stakingABI,
  functionName: 'claimRewards',
    onSuccess(data) {	

    console.log('Success approve', data)
    },
    onError(data){
    
      console.log('error', data)
  }

  })  
    const [myTier2,setTier2]= React.useState<any>("0")

  const [myTier,setTier]= React.useState<any>("0")
  const [nftCount2,setNFTCOUNT2]= React.useState<any>("0")

  const [nftCount,setNFTCOUNT]= React.useState<any>("0")
  const { data:dataWithdraw,write:writeWithdraw } = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
    abi: masterDark,
    functionName: 'withdraw',
    args:[0,values.amount,ethAddress],
      async onSuccess(data) {	
  
      console.log('Success deposit', data)
      },
      onError(data){
      
        console.log('error', data)
    }
  
    })
  const { data:dataDeposit,write:writeDeposit } = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
    abi: masterDark,
    functionName: 'deposit',
    args:[0,values.amount,ethAddress],
      async onSuccess(data) {	
  
      console.log('Success deposit', data)
      },
      onError(data){
      
        console.log('error', data)
    }
  
    })

  const { data:dataClaim,write:writeClaimRewards } = useContractWrite(configCoot)
  const { data:dataV1,write:writeV1 } = useContractWrite(configv1)

  const { data, isLoading, isSuccess, write } = useContractWrite(config)
const [rewardsv2,setRewardsV2]= React.useState<any>("0")
const [rewardsv1,setRewardsV1]= React.useState<any>("0")
const [balanceOf,setBalance]= React.useState<any>("0")

const [pending,setPending]= React.useState<any>([])

    const { data:data2 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
	  watch: true,

      args:[ethAddress],
      functionName: 'calculateRewards',
      })
   
      const { data:dataAllowance } = useContractRead<any,any,any>({
        address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
        abi: erc20ABI,
		watch: true,

        args:[ethAddress,"0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd"],
        functionName: 'allowance',
        })
    const { data:data3 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,   
	   watch: true,

      args:[ethAddress],
      functionName: 'getNftCount',
      })
      const { data:data4 } = useContractRead({
        address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
        abi: stakingABI,    
		watch: true,

        args:[ethAddress],
        functionName: 'getNftTier',
        })

		const handleWithdraw =async () => {

		

			await  writeWithdraw?.()


    };
  const claimRewardsV2 =async () => {

		

			await  write?.()


    };
    const claimRewardsCoot =async () => {

    await  writeClaimRewards?.()


    };
    const claimRewardsV1 =async () => {

		

			await  writeV1?.()


    };
    
	const { data:dataBalance } = useContractRead<any,any,any>({
		address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
		abi: erc20ABI,
		args:["0x008798daAF682d9716Ba9B47dCfD90a503bd9b66"],   
		 watch: true,

		functionName: 'balanceOf',
		})
  
    const { config:configApprove } = usePrepareContractWrite({
      address: '0xe4671844Fcb3cA9A80A1224B6f9A0A6c2Ba2a7d5',
      abi: erc20ABI,
	  
      args:["0x008798daAF682d9716Ba9B47dCfD90a503bd9b66",values.amount],
      functionName: 'approve',
       async onSuccess(data) {	
        },
        onError(data){
        
          console.log('error', data)
      },
      })  
      const { data:dataApprove,write:writeApprove} = useContractWrite({...configApprove,async onMutate(){	
        
       }})

	   const { data:dataPending } = useContractRead<any,any,any>({
		address: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
		abi: masterDark,
		args:[0,ethAddress],   
		 watch: true,

		functionName: 'pendingReward',
		})
	   const { data:dataUserInfo } = useContractRead<any,any,any>({
		address: '0x008798daAF682d9716Ba9B47dCfD90a503bd9b66',
		abi: masterDark,  
		  watch: true,

		args:[0,ethAddress],
		functionName: 'userInfo',
		})
    const { data:data2v1 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],    watch: true,

      functionName: 'calculateRewards',
      })
   
    const { data:data3v1 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],    watch: true,

      functionName: 'getNftCount',
      })
      const { data:data4v1 } = useContractRead({
        address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
        abi: stakingABI,
        args:[ethAddress],
		watch: true,

        functionName: 'getNftTier',
        })
    React.useEffect(()=>{ 
    async  function init(){

        setNFTCOUNT(data3)  
              setNFTCOUNT(data3v1)

              if(data2){ 
                setRewardsV2(ethers.utils.formatEther((data2).toString()).substring(0,6))

              }
              if(data2v1){          
                     setRewardsV1(ethers.utils.formatEther((data2v1).toString()).substring(0,6))


              }
        setTier(data4v1)

        setTier(data4)

      }
      if(ethAddress){
        init()
      }

    },[ethAddress])

    React.useEffect(()=>{		

		if(dataPending){
			setPending(ethers.utils.formatEther(dataPending))
		}
		
		if(dataBalance){
			setBalance(ethers.utils.formatEther(dataBalance))
		}
		
      async function init(){

        await  writeDeposit?.()
      }
      if(dataApprove){
       
        init()
    }
    },[dataApprove])
    const handleApprove =async () => {

       await  writeApprove?.()
      
      }
    const handleDeposit =async () => { 
       if(ethAddress&&dataAllowance){
       if(parseInt((dataAllowance).toString())>=parseInt(values.amount)){
   
       await  writeDeposit?.()
   
     
      }
   
       };  }
  const handleChanges = (prop: keyof any) => (event: React.ChangeEvent<any>) => {
  
	 
		setValues({ ...values, [prop]:ethers.utils.parseUnits(event.target.value,"ether") });
	
	 
	  
  };
  return (
    <div
	key={112}

      style={{
        backgroundImage: `url(${"https://cdn.discordapp.com/attachments/907590324627595284/1076218522100826182/blockchain_2.png"})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
        margin:-8,
        justifyContent:'center',
        alignItems:"center"

      }}
    > <div
	key={99}

    style={{
      paddingTop:100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
<Hero
	key={125}

  align="center"
  backgroundURL="https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg"
  height="176px"
  
  rounded="20px"
  textColor="#fff"
  subTitle='A smart contract on Songbird that allows you to stake Cooties NFTs and earn rewards in our COOT token.'
  title="Introducing In Wallet Staking."
>
 
</Hero>

</div>
      <div
	  	key={142}

    style={{
      paddingTop:100,
      paddingBottom:100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
    <Grid container
	
	key={12}
  justifyContent="center"
  width={"100%"}
  alignItems="center" spacing={3}>
    
  <Grid 
  
  key={9}
  justifyContent="center"
  alignItems="center" item xs>
   
      <div
	  	key={120}

    style={{
      alignSelf:"center",
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
  <PlanCard 
  key={1}
                backgroundColor="#F0F8FF"
                ctaButton={<div><Input
                  onChange={handleChanges('amount')}
                  label="CootCoin"
                  placeholder="100"
                  />
                  {dataAllowance&&parseInt(dataAllowance)>=parseInt(values.amount)? <Button disabled={!writeDeposit}  onClick={() => handleDeposit()} style={{ marginTop: 4 }} isFullWidth text="ADD FUNDS" theme="primary" />: <Button disabled={!handleApprove}  onClick={() => handleApprove()} style={{ marginTop: 4 }} isFullWidth text="APPROVE COOT" theme="primary" />}
                  <Button key={931} disabled={!writeClaimRewards} onClick={() => claimRewardsCoot()} style={{ marginTop: 4 }} isFullWidth text="CLAIM" theme="primary" /><Button key={911} onClick={() => handleWithdraw()} style={{ marginTop: 4 }} isFullWidth text="Withdraw" theme="secondary" /></div>}
                features={[
					"Your Deposited:"+ethers.utils.formatEther(dataUserInfo[0]),
                  "TVL:"+balanceOf.substring(0,12),
                  "ROI 90%",

                ]}
                featuresIconColor="#A8AFB7"
                height="606px"
                horizontalLine
                isCurrentBillingPeriod
                isCurrentPlan
                price={<Typography color="#041836" variant="h1" weight="700">{pending&&pending.substring(0,6) + " COOT"}</Typography>}
                themeColor="#00D1AE"
                title="COOT Staking"
                width="285px" description={<Typography color="#041836" variant="h1" weight="700">{""}</Typography>}    /></div>
  </Grid>
  <Grid 
  
  key={7}
  justifyContent="center"
  alignItems="center" item xs>
   
      <div
    style={{
      alignSelf:"center",
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
  <PlanCard
  key={2}
      backgroundColor="#F0F8FF"
      ctaButton={<div><Button key={31} onClick={()=>claimRewardsV1()} isFullWidth text="CLAIM" theme="primary"/> <Button key={32} style={{ marginTop: 4 }} onClick={() => claimRewardsV1()} isFullWidth text="Withdraw old" theme="outline" /></div>}
      description={<Typography color="#5B8DB9" variant="caption14" weight="550">Your Info</Typography>}
      features={[
        nftCount2+" Cooties",
        myTier2+" Tier",
      ]}
      featuresIconColor="#A8AFB7"
      height="606px"
      horizontalLine
      isCurrentBillingPeriod
      isCurrentPlan
      price={<Typography color="#041836" variant="h1" weight="700">{rewardsv1+" COOT"}</Typography>}
      themeColor="#00D1AE"
      title="Staking Cooties V1"
      width="285px"
    /></div>
  </Grid>

  <Grid 
  
  key={5}
  justifyContent="center"
  alignItems="center" item xs>
     <div
    style={{
      alignSelf:"center",
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
  <PlanCard
  key={3}
      backgroundColor="#F0F8FF"
      ctaButton={<div><Button key={91}  onClick={()=>claimRewardsV2()} isFullWidth text="CLAIM" theme="primary"/><Button  key={92} style={{ marginTop: 4 }} onClick={() => claimRewardsV1()} isFullWidth text="Withdraw old" theme="outline" /></div>}
      description={<Typography color="#5B8DB9" variant="caption14" weight="550">Your Info</Typography>}
      features={[
        nftCount+" Cooties",        
        myTier+" Tier",
      ]}
      featuresIconColor="#A8AFB7"
      height="606px"
      horizontalLine
      isCurrentBillingPeriod
      isCurrentPlan
      price={<Typography color="#041836" variant="h1" weight="700">{rewardsv2+ " COOT"}</Typography>}
      themeColor="#00D1AE"
      title="Staking Cooties V2"
      width="285px"
    />
    </div>
  </Grid>
</Grid>
    
  </div>
 
   </div>

  )
}


export const masterDark = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "addFunder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "contract IERC20",
				"name": "_lpToken",
				"type": "address"
			},
			{
				"internalType": "contract IRewarder",
				"name": "_rewarder",
				"type": "address"
			}
		],
		"name": "addPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_allocPoints",
				"type": "uint256[]"
			},
			{
				"internalType": "contract IERC20[]",
				"name": "_lpTokens",
				"type": "address[]"
			},
			{
				"internalType": "contract IRewarder[]",
				"name": "_rewarders",
				"type": "address[]"
			}
		],
		"name": "addPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_rewardToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_firstOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "depositWithPermit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "disableMigrator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "extension",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxFunding",
				"type": "uint256"
			}
		],
		"name": "extendRewardsViaDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "funding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minExtension",
				"type": "uint256"
			}
		],
		"name": "extendRewardsViaFunding",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "funder",
				"type": "address"
			}
		],
		"name": "FunderAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "funder",
				"type": "address"
			}
		],
		"name": "FunderRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "funding",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "fundRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "harvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Harvest",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardPerSecond",
				"type": "uint256"
			}
		],
		"name": "LogRewardPerSecond",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rewardsExpiration",
				"type": "uint256"
			}
		],
		"name": "LogRewardsExpiration",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "massUpdateAllPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pids",
				"type": "uint256[]"
			}
		],
		"name": "massUpdatePools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "migrate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "Migrate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "MigratorDisabled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "migrator",
				"type": "address"
			}
		],
		"name": "MigratorSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IERC20",
				"name": "lpToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "contract IRewarder",
				"name": "rewarder",
				"type": "address"
			}
		],
		"name": "PoolAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allocPoint",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "contract IRewarder",
				"name": "rewarder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "overwrite",
				"type": "bool"
			}
		],
		"name": "PoolSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "lastRewardTime",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lpSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "accRewardPerShare",
				"type": "uint256"
			}
		],
		"name": "PoolUpdate",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "removeFunder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "resetRewardsDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract IMigratorChef",
				"name": "_migrator",
				"type": "address"
			}
		],
		"name": "setMigrator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_allocPoint",
				"type": "uint256"
			},
			{
				"internalType": "contract IRewarder",
				"name": "_rewarder",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "overwrite",
				"type": "bool"
			}
		],
		"name": "setPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "pids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "allocPoints",
				"type": "uint256[]"
			},
			{
				"internalType": "contract IRewarder[]",
				"name": "rewarders",
				"type": "address[]"
			},
			{
				"internalType": "bool[]",
				"name": "overwrites",
				"type": "bool[]"
			}
		],
		"name": "setPools",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			}
		],
		"name": "updatePool",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint128",
						"name": "accRewardPerShare",
						"type": "uint128"
					},
					{
						"internalType": "uint64",
						"name": "lastRewardTime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "allocPoint",
						"type": "uint64"
					}
				],
				"internalType": "struct MiniChefV2.PoolInfo",
				"name": "pool",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "withdrawAndHarvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addedTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_funder",
				"type": "address"
			}
		],
		"name": "isFunder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "allowed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "lpToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lpTokens",
		"outputs": [
			{
				"internalType": "contract IERC20[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrationDisabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "migrator",
		"outputs": [
			{
				"internalType": "contract IMigratorChef",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "pendingReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pending",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "uint128",
				"name": "accRewardPerShare",
				"type": "uint128"
			},
			{
				"internalType": "uint64",
				"name": "lastRewardTime",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "allocPoint",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolInfos",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint128",
						"name": "accRewardPerShare",
						"type": "uint128"
					},
					{
						"internalType": "uint64",
						"name": "lastRewardTime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "allocPoint",
						"type": "uint64"
					}
				],
				"internalType": "struct MiniChefV2.PoolInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pools",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REWARD",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewarder",
		"outputs": [
			{
				"internalType": "contract IRewarder",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardPerSecond",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardsExpiration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAllocPoint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "rewardDebt",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const stakingABI=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_rewardsToken","internalType":"contract IERC20"},{"type":"address","name":"_nftCollection","internalType":"contract IERC721Enumerable"},{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"},{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardsClaimed","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bonusPercentPerTier","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateBonusMultiplier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateRewards","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewardsByIndex","inputs":[{"type":"uint256","name":"startIndex","internalType":"uint256"},{"type":"uint256","name":"endIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftCount","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftTier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721Enumerable"}],"name":"nftCollection","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nftHoldingStartTime","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"rewardsDistributor","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rewardsPerNftPerHour","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"rewardsToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNftTier","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"newTier","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier1Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier2Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier3Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier4Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier5Duration","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBonusPercentPerTier","inputs":[{"type":"uint256","name":"_bonusPercentPerTier","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsDistributor","inputs":[{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsPerNftPerHour","inputs":[{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateTierDurations","inputs":[{"type":"uint256","name":"_tier1Duration","internalType":"uint256"},{"type":"uint256","name":"_tier2Duration","internalType":"uint256"},{"type":"uint256","name":"_tier3Duration","internalType":"uint256"},{"type":"uint256","name":"_tier4Duration","internalType":"uint256"},{"type":"uint256","name":"_tier5Duration","internalType":"uint256"}]}]



export const erc20ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newCap',
        type: 'uint256',
      },
    ],
    name: 'MaxTotalSupplyUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'cap',
        type: 'uint256',
      },
    ],
    name: 'MinterUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_TOTAL_SUPPLY',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_initial',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'minters',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'minters_minted',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newCap',
        type: 'uint256',
      },
    ],
    name: 'resetMaxTotalSupply',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minterCap',
        type: 'uint256',
      },
    ],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];