
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ChallengeBox.module.css';


export default function ChallengeBox() {

    const { activeChallenge } = useContext(ChallengesContext);

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
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={style.challengeSucceededButton}
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