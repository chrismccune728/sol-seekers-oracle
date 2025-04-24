'use client';

import { useState } from 'react';
import oracleMessages from '../data/oracleMessages.json';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [message, setMessage] = useState('');
  const [playing, setPlaying] = useState(false);

  const playSounds = () => {
    if (playing) return;

    setPlaying(true);
    const doorKnock = new Audio('/door knock.mp3');
    const chime = new Audio('/chime.mp3');

    doorKnock.play();
    doorKnock.onended = () => {
      chime.play();
      chime.onended = () => {
        const newMessage =
          oracleMessages[Math.floor(Math.random() * oracleMessages.length)];
        setMessage(newMessage);
        setPlaying(false);
      };
    };
  };

  return (
    <>
      <Head>
        <title>Sol Seekers: Door Knockers Oracle</title>
        <meta
          name="description"
          content="Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy."
        />
        <meta property="og:title" content="Sol Seekers: Door Knockers Oracle" />
        <meta
          property="og:description"
          content="Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy."
        />
        <meta property="og:image" content="/solseeker.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sol Seekers: Door Knockers Oracle" />
        <meta
          name="twitter:description"
          content="Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy."
        />
        <meta name="twitter:image" content="/solseeker.png" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
        <Image
          src="/solseeker.png"
          alt="Soul Seeker Logo"
          width={150}
          height={150}
          className="rounded-full shadow-lg"
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          🌞 Sol Seekers: Door Knocker’s Oracle
        </h1>

        <p className="mt-2 text-lg md:text-xl text-gray-700 max-w-xl">
          Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy.
        </p>

        <button
          onClick={playSounds}
          disabled={playing}
          className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition"
        >
          {playing ? 'Summoning...' : 'Summon Your Prophecy'}
        </button>

        {message && (
          <p className="mt-8 text-xl font-medium text-green-800 max-w-2xl">{message}</p>
        )}
      </main>
    </>
  );
}
