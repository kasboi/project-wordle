import React, {useState} from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"
import GameInput from "../GameInput"
import GuessHistory from "../GuessHistory/GuessHistory"
import Guess from "../Guess/Guess"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
    return (
        <>
            <GuessHistory guesses={guesses} />
            <Guess />
            <GameInput setGuesses={setGuesses} />
        </>
    )
}

export default Game
