'use client';

import './globals.css';

import '@rainbow-me/rainbowkit/styles.css';
import { config } from './wagmi';

import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
              <QueryClientProvider client={queryClient}>
              <RainbowKitProvider theme={darkTheme()}>
                {children}
              </RainbowKitProvider>
              </QueryClientProvider>
            </WagmiProvider>
      </body>
    </html>
  );
}