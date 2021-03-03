import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import Cookie from 'js-cookie';
import { LevelUpModal } from "../components/LevelUpModal";


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    failedChallenge: () => void;
    succeededChallenge: () => void;
    closeLevelUpModal: () => void;
}
interface ChallengeContextProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}


export const ChallengesContext = createContext({} as ChallengeContextData);


export function ChallengesContextProvider({ children, ...rest }: ChallengeContextProps) {

    const [level, setLevel] = useState(rest.level ?? 0);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [experienceToNextLevel, setExperienceToNextLevel] = useState(Math.round(Math.pow((level + 1) * 4.5, 2)));
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    useEffect(() => {
        Cookie.set("level", String(level));
        Cookie.set("currentExperience", String(currentExperience));
        Cookie.set("challengesCompleted", String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted]);

    function levelUp() {
        setLevel(level + 1);
        setExperienceToNextLevel(experienceToNextLevel + (Math.round(Math.pow((level + 1) * 2.5, 2))));
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {

    }

    function startNewChallenge() {
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        setActiveChallenge(challenge);


        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo Desafio!!!', {
                body: `Faça agora e ganhe ${challenge.amount} de XP!`
            });
        }
    }


    function failedChallenge() {
        setActiveChallenge(null);
        //TODO: abaixar Vida
    }

    function succeededChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            experienceToNextLevel,
            levelUp,
            activeChallenge,
            startNewChallenge,
            failedChallenge,
            succeededChallenge,
            closeLevelUpModal
        }}
        >
            {children}

            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    );
}