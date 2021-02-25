// Import css module
import styles from '../styles/components/Countdown.module.css';

// Import useState, useEffect (Hook do React) e useContext (para usar informações de outra parte da aplicação)
import { useState, useEffect, useContext } from 'react';

// Import do contexto
import { CountdownContext } from '../contexts/CountdownContext';

// O useEffect é usado da seguinte maneira:
// 2 argumentos
// 1) o que eu quero executar?
// 2) quando eu quero executar?
//
// useEffect(() => {functionEx()}, [isActive])
//
// sempre que o valor de 'isActive' mudar, a função será executada

export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(CountdownContext);

    // Lógica para pegar a primeira e segunda casa dos minutos e segundos
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');


    return (
        <div>
            <div className={ styles.countdownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>


            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado 
                    <img src="/icons/check-circle.svg" alt=""/>
                </button>
            ) : (
                 <>    
                    { isActive ? (
                    <button 
                        type="button" 
                        className={ `${styles.countdownButton} ${styles.countdownButtonActive}` } 
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>

                    ) : (
                        <button 
                            type="button" 
                            className={ styles.countdownButton }
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="/icons/start.svg" alt=""/>
                        </button>

                        ) }
                </>
            ) }

        </div>
        
    );
}