import React from "react"

function GuessHistory({ guesses }) {
    return (
        <>
            <div className="guess-results">
                {guesses.map((guess) => (
                    <p className="guess" key={guess.id}>
                        {guess.label}
                    </p>
                ))}
            </div>
        </>
    )
}

export default GuessHistory
