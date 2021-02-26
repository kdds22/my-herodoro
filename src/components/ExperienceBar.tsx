import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

    const { currentExperience } = useContext(ChallengesContext);

    return (
        <header className={style.experienceBar}>
            <span>0 XP</span>
            <div>
                <div style={{ width: '50%' }}>
                </div>
                <span className={style.currentExperience} style={{ left: '50%' }}>
                    <strong>{currentExperience} XP</strong>
                </span>
            </div>
            <span>600 XP</span>
        </header>
    );
}