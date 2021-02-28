import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/Countdown.module.css';




export default function Countdown() {

    const {
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountDown,
        resetCountDown
    } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");


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