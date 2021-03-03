import React from 'react';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownContextProvider } from '../contexts/CountdownContext';
import style from '../styles/pages/Home.module.css';
import { GetServerSideProps } from 'next';
import { ChallengesContextProvider } from '../contexts/ChallengesContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  return (

    <ChallengesContextProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>

        <ExperienceBar />
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
      </div>
    </ChallengesContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}