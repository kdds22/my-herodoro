import { createContext, ReactNode, useState } from "react";


interface ChallengeContextData {
    level: number,
    currentExperience: number,
    challengesCompleted: number,
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

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log("novo desafio");
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}