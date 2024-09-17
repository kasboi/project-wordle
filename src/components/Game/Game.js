import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GameInput from "../GameInput"

import GuessResults from "../GuessResults/GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
    const [guesses, setGuesses] = useState([])
    return (
        <>
            <GuessResults guesses={guesses} />
            <GameInput
                answer={answer}
                guesses={guesses}
                setGuesses={setGuesses}
            />
        </>
    )
}

export default Game
