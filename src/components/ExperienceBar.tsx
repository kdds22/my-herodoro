import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

    const { currentExperience, experienceToNextLevel, initialExperience } = useContext(ChallengesContext);

    const [percentToNextLevel, setPercentToNextLevel] = useState(Math.round(currentExperience * 100) / experienceToNextLevel);

    useEffect(() => {
        setPercentToNextLevel(Math.round(currentExperience * 100) / experienceToNextLevel);
    }, [currentExperience]);

    return (
        <header className={style.experienceBar}>
            <span>{initialExperience} XP</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}>
                </div>
                <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    <strong>{currentExperience} XP</strong>
                </span>
            </div>
            <span>{experienceToNextLevel} XP</span>
        </header>
    );
}