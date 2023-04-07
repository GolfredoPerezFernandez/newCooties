
import { Box, Grid } from '@mui/material'
import { Button, Hero, Input, PlanCard, Typography } from '@web3uikit/core'
import { ethers } from 'ethers';
import * as React from 'react'
import { useContractWrite, useAccount,usePrepareContractWrite, useContractRead } from 'wagmi';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export default function Staking() {  
  
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
	const { address:ethAddress} = useAccount()
  const { data:dataV1,write:writeV1 } = useContractWrite(configv1)

  const { data, isLoading, isSuccess, write } = useContractWrite(config)
const [rewardsv2,setRewardsV2]= React.useState<any>("0")
const [rewardsv1,setRewardsV1]= React.useState<any>("0")

    const { data:data2 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'calculateRewards',
      })
   
    const { data:data3 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'getNftCount',
      })
      const { data:data4 } = useContractRead({
        address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
        abi: stakingABI,
        args:[ethAddress],
        functionName: 'getNftTier',
        })

  const claimRewardsV2 =async () => {

		

			await  write?.()


    };

    const claimRewardsV1 =async () => {

		

			await  writeV1?.()


    };
    const { data:data2v1 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'calculateRewards',
      })
   
    const { data:data3v1 } = useContractRead({
      address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'getNftCount',
      })
      const { data:data4v1 } = useContractRead({
        address: '0x9A89D078bb95fC15adE9f9aC0a9D803036192Acd',
        abi: stakingABI,
        args:[ethAddress],
        functionName: 'getNftTier',
        })
    React.useEffect(()=>{ 
    async  function init(){

        setNFTCOUNT(data3)  
              setNFTCOUNT(data3v1)

              if(data2){ 
                setRewardsV2(ethers.utils.formatEther(data2.toString()).substring(0,6))

              }
              if(data2v1){          
                     setRewardsV1(ethers.utils.formatEther(data2v1.toString()).substring(0,6))


              }
        setTier(data4v1)

        setTier(data4)

      }
      if(ethAddress){
        init()
console.log("entro")
      }

    },[ethAddress])
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
        justifyContent:'center',
        alignItems:"center"

      }}
    > <div
    style={{
      paddingTop:100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent:"center",
      alignItems:"center",
    }}
  >
<Hero
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
  justifyContent="center"
  width={"100%"}
  alignItems="center" spacing={3}>
    
  <Grid 
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
                backgroundColor="#F0F8FF"
                ctaButton={<div><Input

                  label="CootCoin"
                  placeholder="100"
                  />
                  <Button onClick={() => claimRewardsV1()} style={{ marginTop: 4 }} isFullWidth text="CLAIM" theme="primary" /><Button onClick={() => claimRewardsV1()} style={{ marginTop: 4 }} isFullWidth text="Withdraw" theme="secondary" /><Button style={{ marginTop: 4 }} onClick={() => claimRewardsV1()} isFullWidth text="Withdraw old" theme="outline" /></div>}
                features={[
                  "TVL:",
                  "ROI",

                  "Your Deposited:",
                ]}
                featuresIconColor="#A8AFB7"
                height="606px"
                horizontalLine
                isCurrentBillingPeriod
                isCurrentPlan
                price={<Typography color="#041836" variant="h1" weight="700">{rewardsv1 + " COOT"}</Typography>}
                themeColor="#00D1AE"
                title="COOT Staking"
                width="285px" description={<Typography color="#041836" variant="h1" weight="700">{""}</Typography>}    /></div>
  </Grid>
  <Grid 
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
      backgroundColor="#F0F8FF"
      ctaButton={<Button onClick={()=>claimRewardsV1()} isFullWidth text="CLAIM" theme="primary"/>}
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
      backgroundColor="#F0F8FF"
      ctaButton={<Button  onClick={()=>claimRewardsV2()} isFullWidth text="CLAIM" theme="primary"/>}
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


const stakingABI=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_rewardsToken","internalType":"contract IERC20"},{"type":"address","name":"_nftCollection","internalType":"contract IERC721Enumerable"},{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"},{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardsClaimed","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bonusPercentPerTier","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateBonusMultiplier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateRewards","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewardsByIndex","inputs":[{"type":"uint256","name":"startIndex","internalType":"uint256"},{"type":"uint256","name":"endIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftCount","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftTier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721Enumerable"}],"name":"nftCollection","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nftHoldingStartTime","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"rewardsDistributor","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rewardsPerNftPerHour","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"rewardsToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNftTier","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"newTier","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier1Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier2Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier3Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier4Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier5Duration","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBonusPercentPerTier","inputs":[{"type":"uint256","name":"_bonusPercentPerTier","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsDistributor","inputs":[{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsPerNftPerHour","inputs":[{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateTierDurations","inputs":[{"type":"uint256","name":"_tier1Duration","internalType":"uint256"},{"type":"uint256","name":"_tier2Duration","internalType":"uint256"},{"type":"uint256","name":"_tier3Duration","internalType":"uint256"},{"type":"uint256","name":"_tier4Duration","internalType":"uint256"},{"type":"uint256","name":"_tier5Duration","internalType":"uint256"}]}]