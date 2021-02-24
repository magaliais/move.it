import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

// Import css module
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    // Define quais informações do contexto serão usadas nesse componente
    const { level } = useContext(ChallengesContext);

    return (
        <div className= { styles.profileContainer }>
            <img src="https://github.com/magaliais.png" alt="Gabriel Albuquerque" />
            <div>
                <strong>Gabriel Albuquerque</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}