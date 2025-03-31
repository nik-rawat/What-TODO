"use client";

import "./globals.css";
import { config } from "./wagmi";
import { WagmiProvider } from "wagmi";
import { useAccount } from "wagmi"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient();
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="fixed top-0 right-0 flex p-8">
              <ConnectButton />
            </div>
            <h1 className="text-4xl font-bold">Welcome to What-TODO</h1>
            <p className="mt-4 text-lg">Your decentralized task management solution.</p>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    
  );
}
