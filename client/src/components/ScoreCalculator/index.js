import React, { useState, useEffect } from "react";
import "./style.css"

export default function ScoreCalculator({ finalScore, setFinalScore, topScore = 10, lowScore = 7 }) {

    const [judge1, setJudge1] = useState()
    const [judge2, setJudge2] = useState()
    const [judge3, setJudge3] = useState()
    const [judge4, setJudge4] = useState()
    const [judge5, setJudge5] = useState()

    useEffect(() => {
        let scores = [judge1, judge2, judge3, judge4, judge5]
        if (scores.includes(undefined)) {
            setFinalScore(`Need score from Judge ${scores.indexOf(undefined) +1 }`)
        }
        else {
            scores.sort((a, b) => a - b)
            scores.pop()
            scores.shift()
                scores = (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
                if (judge1 > topScore || judge2 > topScore || judge3 > topScore || judge4 > topScore || judge5 > topScore) setFinalScore(`A score is higher than ${topScore}`)
                else if (judge1 < lowScore || judge2 < lowScore || judge3 < lowScore || judge4 < lowScore || judge5 < lowScore) setFinalScore(`A score is lower than ${lowScore}`)
                else (

                    scores === 'NaN' ? setFinalScore('More Scores Needed') : setFinalScore(scores)
                )

        }
    }, [judge1, judge2, judge3, judge4, judge5])


    return (
        <div className="scoreInput">
            <h3> Judge 1</h3>
            <input
                id="judge1"
                type="number"
                min="0"
                max="10"
                name="judge1"
                step='any'
                className='form-input'
                placeholder='Judge 1 Score'
                onChange={(e) => setJudge1(parseFloat(e.target.value))}
            />
            <h3> Judge 2</h3>
            <input
                id="judge2"
                type="number"
                min="0"
                max="10"
                name="judge2"
                step='any'
                className='form-input'
                placeholder='Judge 2 Score'
                onChange={(e) => setJudge2(parseFloat(e.target.value))}
            />
            <h3> Judge 3</h3>
            <input
                id="judge3"
                type="number"
                min="0"
                max="10"
                name="judge3"
                step='any'
                className='form-input'
                placeholder='Judge 3 Score'
                onChange={(e) => setJudge3(parseFloat(e.target.value))}
            />
            <h3> Judge 4</h3>
            <input
                id="judge4"
                type="number"
                min="0"
                max="10"
                name="judge4"
                step='any'
                className='form-input'
                placeholder='Judge 4 Score'
                onChange={(e) => setJudge4(parseFloat(e.target.value))}
            />
            <h3> Judge 5</h3>
            <input
                id="judge5"
                type="number"
                min="0"
                max="10"
                name="judge5"
                step='any'
                className='form-input'
                placeholder='Judge 5 Score'
                onChange={(e) => setJudge5(parseFloat(e.target.value))}
            />
            <h1>Final score is: {finalScore}</h1>
        </div>
    )
}