import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";




interface CountdownContextData {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownContextProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge, activeChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = (time % 60);

    function startCountDown() {
        setIsActive(true);
        if (hasFinished) {
            setHasFinished(false);
        }
    }

    function resetCountDown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60)

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        } else if (!activeChallenge) {
            setHasFinished(false);
            resetCountDown();
        }
    }, [isActive, time, activeChallenge]);


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountdownContext.Provider>
    );
}