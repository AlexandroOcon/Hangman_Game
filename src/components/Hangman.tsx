import { useState } from "react";
import hangman from '../img/hangman.png';
import '../css/Hangman.css'
import Conteo from "./Conteo";

interface HangmanProps {
    words: string[];
    hint: string;
}

const Hangman = ({ words, hint }: HangmanProps) => { //Esqueleto del componente

    const [selectedWords, setSelectedWord] = useState(words[0]);
    const [guessdLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const displayWord = selectedWords.split('').map((letter, index) => {
        <div></div>
        console.log("SelectWord: ", selectedWords)
        if (guessdLetters.includes(letter)) {
            console.log("guesedLetters: ", guessdLetters)
            return letter;
        } else {
            return '_';
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessdLetters.includes(letter)) {

            setGuessedLetters([...guessdLetters, letter]);
            if (!selectedWords.includes(letter)) {
                setErrorCount((prev) => prev + 1);
                console.log("setErrorCount: ", setErrorCount)
            }
        }
    };

    const restartGame = () => {
        const newWordIndex = Math.floor(Math.random() * words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord); //Fijar la nueva palabra
        setGuessedLetters([]); //Reiniciar las teclas adivinadas
        setErrorCount(0); //Iniciar el conteo de errores en 0
    }

    return (

        <div className="container2">
            <p className="pista">Pista: {hint}</p>
            <img src={hangman} alt="hangman image..." width={200} height={200}></img>
            <p>{displayWord.join(' ')}</p>
            <div className="App">
            <h1>My React App</h1>
            <Conteo />
            </div>
            <input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
            {
                (displayWord.join('') === selectedWords || errorCount > 5) && (
                    <button className="newWord" onClick={() => {
                        restartGame();
                        setSelectedWord(words[Math.floor(Math.random() * words.length)]);
                    }}>Select new WORD</button>
                )
            }
            <p>Cantidad de errors {errorCount}</p>
            {displayWord.join('') === selectedWords && (

                <p className="WIN">You win in this game</p>

            )}
        </div>
    )




};

export default Hangman;