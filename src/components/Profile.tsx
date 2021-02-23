// Import css module
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className= { styles.profileContainer }>
            <img src="https://github.com/magaliais.png" alt="Gabriel Albuquerque" />
            <div>
                <strong>Gabriel Albuquerque</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}