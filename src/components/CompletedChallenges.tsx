import style from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
    return (
        <div className={style.completedChallengesContainer}>
            <span>Tarefas completadas: </span>
            <span>5</span>
        </div>
    );
}