
import { Box } from '@mui/material'
import { Button, Hero, PlanCard, Typography } from '@web3uikit/core'
import { ethers } from 'ethers';
import * as React from 'react'
import { useContractWrite, useAccount,usePrepareContractWrite, useContractRead } from 'wagmi';

export default function Staking() {  
  
  const { config, error } = usePrepareContractWrite({
  address: '0xA01F32704D4cF52C60d852332aD0D7222175F59a',
  abi: stakingABI,
  functionName: 'claimRewards',
    onSuccess(data) {	

    console.log('Success approve', data)
    },
    onError(data){
    
      console.log('error', data)
  }

  })
  const [nftCount,setNFTCOUNT]= React.useState<String>("0")
	const { address:ethAddress} = useAccount()

  const { data, isLoading, isSuccess, write } = useContractWrite(config)
const [rewardsv2,setRewardsV2]= React.useState<String>("0")

    const { data:data2 } = useContractRead({
      address: '0xA01F32704D4cF52C60d852332aD0D7222175F59a',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'calculateRewards',
      })
   
    const { data:data3 } = useContractRead({
      address: '0xA01F32704D4cF52C60d852332aD0D7222175F59a',
      abi: stakingABI,
      args:[ethAddress],
      functionName: 'getNftCount',
      })

  const claimRewardsV2 =async () => {

		

			await  write?.()


    };

    React.useEffect(()=>{ 
    async  function init(){

        console.log("data3 "+data3)
        setNFTCOUNT(data3)
        setRewardsV2(ethers.utils.formatEther(data2).substring(0,6))

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
    
    <PlanCard
      backgroundColor="#F0F8FF"
      ctaButton={<Button onClick={()=>claimRewardsV2()} isFullWidth text="CLAIM" theme="primary"/>}
      description={<Typography color="#5B8DB9" variant="caption14" weight="550">Your Info</Typography>}
      features={[
        nftCount+" Cooties",
      ]}
      featuresIconColor="#A8AFB7"
      height="606px"
      horizontalLine
      isCurrentBillingPeriod
      isCurrentPlan
      price={<Typography color="#041836" variant="h1" weight="700">{rewardsv2+" COOT"}</Typography>}
      themeColor="#00D1AE"
      title="Staking Cooties V1"
      width="285px"
    />
     <div
      style={{
        margin:20
      }}
    />
     <PlanCard
      backgroundColor="#F0F8FF"
      ctaButton={<Button  onClick={()=>claimRewardsV2()} isFullWidth text="CLAIM" theme="primary"/>}
      description={<Typography color="#5B8DB9" variant="caption14" weight="550">Your Info</Typography>}
      features={[
        nftCount+" Cooties",
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
 
   </div>

  )
}


const stakingABI=[{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_rewardsToken","internalType":"contract IERC20"},{"type":"address","name":"_nftCollection","internalType":"contract IERC721Enumerable"},{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"},{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"RewardsClaimed","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"bonusPercentPerTier","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateBonusMultiplier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"calculateRewards","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewards","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"distributeRewardsByIndex","inputs":[{"type":"uint256","name":"startIndex","internalType":"uint256"},{"type":"uint256","name":"endIndex","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftCount","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"getNftTier","inputs":[{"type":"address","name":"user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC721Enumerable"}],"name":"nftCollection","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nftHoldingStartTime","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"rewardsDistributor","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rewardsPerNftPerHour","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"rewardsToken","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setNftTier","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"uint256","name":"newTier","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier1Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier2Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier3Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier4Duration","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tier5Duration","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateBonusPercentPerTier","inputs":[{"type":"uint256","name":"_bonusPercentPerTier","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsDistributor","inputs":[{"type":"address","name":"_rewardsDistributor","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateRewardsPerNftPerHour","inputs":[{"type":"uint256","name":"_rewardsPerNftPerHour","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateTierDurations","inputs":[{"type":"uint256","name":"_tier1Duration","internalType":"uint256"},{"type":"uint256","name":"_tier2Duration","internalType":"uint256"},{"type":"uint256","name":"_tier3Duration","internalType":"uint256"},{"type":"uint256","name":"_tier4Duration","internalType":"uint256"},{"type":"uint256","name":"_tier5Duration","internalType":"uint256"}]}]