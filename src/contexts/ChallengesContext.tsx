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
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenge: () => void;
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

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setActiveChallenge(challenge);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            activeChallenge,
            startNewChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}