import { useEffect, useState } from 'react';
import style from '../styles/components/Countdown.module.css';


let countdownTimeOut: NodeJS.Timeout;

export default function Countdown() {

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = (time % 60);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

    function startCountDown() {
        setIsActive(true);
        if (hasFinished) {
            setHasFinished(false);
        }
    }

    function resetCountDown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(0.2 * 60)

    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);


    return (
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={style.countdownButton}
                >
                    Ciclo Finalizado
                </button>
            ) : (
                    <>
                        { isActive ?
                            <button
                                type="button"
                                className={`${style.countdownButton} ${style.countdownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar um ciclo
                        </button>
                            :
                            <button
                                type="button"
                                className={style.countdownButton}
                                onClick={startCountDown}
                            >
                                Iniciar um ciclo
                        </button>
                        }
                    </>
                )
            }

        </div>
    );
}