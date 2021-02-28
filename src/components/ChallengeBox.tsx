
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';


export default function ChallengeBox() {

    const { activeChallenge, failedChallenge, succeededChallenge } = useContext(ChallengesContext);

    const { resetCountDown } = useContext(CountdownContext);


    function handleChallengeFailed() {
        failedChallenge();
        resetCountDown();
    }

    function handleChallengeSucceeded() {
        succeededChallenge();
        resetCountDown();
    }

    return (
        <div className={style.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={style.challengeBoxActive}>
                    <header>
                        Ganhe {activeChallenge.amount} XP
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Desafio" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={style.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={style.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Concluí
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={style.challengeBoxNotActive}>
                        <strong>Conclua ciclos para receber novos desafios.</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Suba de Nivel" />
                        Avance de nível completando desafios
                    </p>
                    </div>
                )
            }
        </div>
    );

}