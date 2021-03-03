import { useContext } from 'react';
import { ChallengesContext, ChallengesContextProvider } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export default function Profile() {

    const { level } = useContext(ChallengesContext);

    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/kdds22.png" alt="Klaus Dellano" />
            <div>
                <strong>Klaus Dellano</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                        Level {level}
                </p>
            </div>
        </div>
    );
}