import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number;
}
interface ChallengeContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
    initialExperience: number,
    experienceToNextLevel: number,
    activeChallenge: Challenge,
    levelUpped: () => void,
    startNewChallenge: () => void,
    failedChallenge: () => void,
    succeededChallenge: () => void;
}
interface ChallengeContextProps {
    children: ReactNode
}


export const ChallengesContext = createContext({} as ChallengeContextData);


export function ChallengesContextProvider({ children }: ChallengeContextProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [experienceToNextLevel, setExperienceToNextLevel] = useState(Math.round(Math.pow((level + 1) * 4.5, 2)))
    const [initialExperience, setInitialExperience] = useState(0);

    function levelUp() {
        setLevel(level + 1);
        setInitialExperience(initialExperience + experienceToNextLevel);
        setExperienceToNextLevel(experienceToNextLevel + (Math.round(Math.pow((level + 1) * 4, 2))));
    }

    function startNewChallenge() {
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setActiveChallenge(challenge);
    }

    function failedChallenge() {
        setActiveChallenge(null);
        levelDownned();
    }

    function succeededChallenge() {
        setCurrentExperience(currentExperience + (activeChallenge.amount));
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
        levelUpped();
    }

    function levelUpped() {
        if (currentExperience >= experienceToNextLevel) {
            levelUp();
        }
    }

    function levelDownned() {
        setCurrentExperience(currentExperience - (activeChallenge.amount * 0.3));
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            initialExperience,
            experienceToNextLevel,
            levelUpped,
            activeChallenge,
            startNewChallenge,
            failedChallenge,
            succeededChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}