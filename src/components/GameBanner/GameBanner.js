import React from "react"

function GameBanner({ status, guessLength = 0, answer }) {
    if (status === "happy") {
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in {" "}
                    <strong>{guessLength} guess{`${guessLength > 1 ? "es" : ""}`}</strong>.
                </p>
            </div>
        )
    }

    return (
        <div className="sad banner">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
        </div>
    )
}

export default GameBanner
