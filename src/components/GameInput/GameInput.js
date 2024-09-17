import React, { useState } from "react"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { checkGuess } from "../../game-helpers"
import GameBanner from "../GameBanner/GameBanner"

function GameInput({ answer, guesses, setGuesses }) {
    const [guess, setGuess] = useState("")
    const [gameOver, setGameOver] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (guesses.length <= NUM_OF_GUESSES_ALLOWED) {
            const result = checkGuess(guess, answer)
            setGuesses((guesses) => [...guesses, result])
            if (guess === answer) {
                setGameOver("happy")
            }
        } else {
            setGameOver("sad")
        }
        setGuess("")
    }

    if (gameOver) {
        return (
            <GameBanner
                status={gameOver}
                answer={answer}
                guessLength={guesses.length}
            />
        )
    }
    return (
        <>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    id="guess-input"
                    type="text"
                    value={guess}
                    disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
                    onChange={(e) => setGuess(e.target.value.toUpperCase())}
                    pattern="^[a-zA-Z]{5}$"
                    title="Alphabetic characters only [A-Z]. 5 characters"
                />
            </form>
        </>
    )
}

export default GameInput
