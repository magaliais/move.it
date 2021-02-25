// 2 - Importar o uso de contexto do react
// 7 - Importar o uso de ReactNode (usado para fazer a CountdownProviderPops)
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// import do contexto usado aqui
import { ChallengesContext } from '../contexts/ChallengesContext';

// 3 - Montar a interface, mesmo que ainda não se saiba quais dados vão ser usados)
interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void,
    resetCountdown: () => void,
}

// 6 - Criar a interface do Provider Props
interface CountdownProviderProps {
    children: ReactNode;
}

// 1 - Criar a variável que usará o contexto
// 4 - {} as NOME_DA_INTERFACE
export const CountdownContext = createContext({} as CountdownContextData)


let countdownTimeout: NodeJS.Timeout;

// 5 - Retornar todos os valores disponibilizados pelo context
export function CountdownProvider({ children }: CountdownProviderProps) {

    // variaveis ----------------------------------

    // Define quais informações do contexto serão usadas nesse componente
    const { startNewChallenge } = useContext(ChallengesContext);

    
    // Desclaração dos Estados do React (useState)
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    // Manipula o 'time' para transformar em minutos e segundos
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    // functions ---------------------------------

    function startCountdown() {
        setIsActive(true);
    }

    // Lógica para resetar a contagem
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.05 * 60);
    }

    // Lógica para a contagem regressiva
    // Muda o estado do isActive e ativa a primeira redução de um segundo.
    // Quando o segundo é reduzido, o useEffect é acionado de novo, modificando mais um segundo
    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();    // Função do contexto
        }
    }, [isActive, time]
    )

    return (                        // 8- colocar no value os valores que serão retornados
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )

}