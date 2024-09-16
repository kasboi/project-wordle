import React, { useState } from "react"

function GameInput({ setGuesses }) {
    const [guess, setGuess] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Guess submitted:", guess)
        setGuesses((guesses) => [
            ...guesses,
            { label: guess, id: crypto.randomUUID() },
        ])
        setGuess("")
    }
    return (
        <>
            <form class="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    id="guess-input"
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value.toUpperCase())}
                    pattern="^[a-zA-Z]{5}$"
                    title="Alphabetic characters only [A-Z]. 5 characters"
                />
            </form>
        </>
    )
}

export default GameInput
