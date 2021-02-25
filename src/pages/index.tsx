import React from 'react';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import style from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={style.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  )
}
