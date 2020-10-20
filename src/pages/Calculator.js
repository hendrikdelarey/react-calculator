import React, { useState } from "react"
import { useLocation } from "react-router-dom"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function Calculator() {
    let query = useQuery()

    const [inputA, setInputA] = useState(query.get("a"))
    const [inputB, setInputB] = useState(query.get("b"))
    const [answer, setAnswer] = useState(Number(inputA) + Number(inputB))
    const [shareableLink, setShareableLink] = useState(createShareableLink())

    function inputAChanged(e) {
        setInputA(e.target.value)
        let answer = Number(e.target.value) + Number(inputB);
        setShareableLink(`http://localhost:3000/calculator?a=${e.target.value}&b=${inputB}`)
        setAnswer(answer)
    }

    function inputBChanged(e) {
        setInputB(e.target.value)
        let answer = Number(inputA) + Number(e.target.value);
        setShareableLink(`http://localhost:3000/calculator?a=${inputA}&b=${e.target.value}`)
        setAnswer(answer)
    }

    function createShareableLink() {
        return `http://localhost:3000/calculator?a=${inputA}&b=${inputB}`
    }

    return(
        <div>
            <h1>Calculator</h1>
            <input type="number" value={inputA} onChange={inputAChanged}></input>
            +
            <input type="number" value={inputB} onChange={inputBChanged}></input>
            =
            <span>{isNaN(answer) ? "" : answer}</span>

            <div>
                Shareable Link: <a href={shareableLink}>{shareableLink}</a>
            </div>
        </div>
    )
}

export default Calculator;