import { useContext } from 'react';
import { ChallengesContext, ChallengesContextProvider } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export default function Profile() {

    const challengeContextData = useContext(ChallengesContext);

    return (
        <ChallengesContextProvider>
            <div className={style.profileContainer}>
                <img src="https://github.com/kdds22.png" alt="Klaus Dellano" />
                <div>
                    <strong>Nome</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level" />
                        Level {challengeContextData.level}
                    </p>
                </div>
            </div>
        </ChallengesContextProvider>
    );
}