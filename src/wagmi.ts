import { connectorsForWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { trustWallet, metaMaskWallet, coinbaseWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';

// Define wallet connectors properly
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended Wallets',
      wallets: [
        metaMaskWallet,
        trustWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    projectId: 'YOUR_PROJECT_ID',
    appName: 'RainbowKit App',
    appIcon: 'https://example.com/icon.png',
    appDescription: 'This is a sample dApp using RainbowKit',
    appUrl: 'https://example.com',
  }
);

// Export the configuration with connectors
export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
