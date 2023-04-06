import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { songbird } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  [songbird, ...(process.env.NODE_ENV === 'development' ? [songbird] : [])],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'TheCooties',
  chains,
})

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export { chains }
