
import style from '../styles/components/ChallengeBox.module.css';


export default function ChallengeBox() {

    const hasActiveChallenge = true;

    return (
        <div className={style.challengeBoxContainer}>

            {hasActiveChallenge ? (
                <div className={style.challengeBoxActive}>
                    <header>
                        Ganhe 450 XP
                    </header>
                    <main>
                        <img src="icons/body.svg" alt="Desafio" />
                        <strong>Novo Desafio</strong>
                        <p>Faça 15 Flexões</p>
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