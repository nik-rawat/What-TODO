'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import Todo from './components/todo';

export default function Home() {
  // useAccount returns an object with these properties
  const { isConnected, } = useAccount();

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-blue-950 to-gray-950">
      <div className="fixed top-0 flex justify-between w-full p-4 bg-(gray-950) bg-opacity-50 z-1">
        <h2 className='text-2xl font-bold'>What-TODO</h2>
        <div className="flex gap-1">
          <ConnectButton />
        </div>
      </div>

      {isConnected ?
        <div className="flex flex-col items-center justify-center w-full h-screen text-white z-0">
            <Todo />
        </div> 
        : <div className="flex flex-col items-center justify-center w-full h-screen text-white z-0">
            <h1 className="text-6xl font-bold">Welcome to What-TODO</h1>
            <p className="text-2xl">A decentralized task management app</p>
          </div>
      }
    </main>
  );
}