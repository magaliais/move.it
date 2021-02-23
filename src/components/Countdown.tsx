// Import css module
import styles from '../styles/components/Countdown.module.css';

// Import useState e useEffect (Hook do React)
import { useState, useEffect } from 'react';

// O useEffect é usado da seguinte maneira:
// 2 argumentos
// 1) o que eu quero executar?
// 2) quando eu quero executar?
//
// useEffect(() => {console.log(active)}, [active])
//
// sempre que o valor de 'active' mudar, a função será executada

export function Countdown() {

    // Desclaração dos Estados do React (useState)
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    // Manipula o 'time' para transformar em minutos e segundos
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Lógica para pegar a primeira e segunda casa dos minutos e segundos
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown() {
        setActive(true);
    }

    // Lógica para a contagem regressiva
    // Muda o estado do active e ativa a primeira redução de um segundo.
    // Quando o segundo é reduzido, o useEffect é acionado de novo, modificando mais um segundo
    useEffect(() => {
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

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
            <button 
                type="button" 
                className={ styles.countdownButton }
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
        
    );
}