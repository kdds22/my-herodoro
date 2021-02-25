import style from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/kdds22.png" alt="Klaus Dellano" />
            <div>
                <strong>Nome</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level
                </p>
            </div>
        </div>
    );
}