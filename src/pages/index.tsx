import React from 'react';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownContextProvider } from '../contexts/CountdownContext';
import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>

      <ExperienceBar />

      <CountdownContextProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownContextProvider>
    </div>
  )
}
