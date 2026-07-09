import { useState, useEffect } from "react"
import { quizData } from "../data/data"
import "./components.css"

function Quiz() {
  const [quizID, setQuizID] = useState(1)
  const [finished, setFinished] = useState(false)
  const [select, setSelect] = useState("")
  const [count, setCount] = useState(0)

  const currentQuiz = quizData.find(quiz => quiz.id === quizID)

  useEffect(() => {
    setSelect("")
  }, [quizID])

  const Click = () => {
    if (!currentQuiz) return
    if(select === "") {
        alert("選択してください")
        return
    }

    console.log("select:", select)
    console.log("answer:", currentQuiz.answer)

    if (String(currentQuiz.answer).trim() === String(select).trim()) {
      setCount(prev => prev + 1)
      alert("正解")
    } else {
      alert("不正解")
    }

    if (quizID >= quizData.length) {
      setFinished(true)
      return
    }

    setQuizID(prev => prev + 1)
  }

  const Return = () => {
    setQuizID(1)
    setCount(0)
    setFinished(false)
  }

  if (finished) {
    const ave = Math.floor(count / quizData.length *100)
    return (
        <div className="quiz-content">
            <div className="quiz-area">
                <div>{quizData.length}問中 {count}問正解</div>
                <div>正当率{ave}%</div>
                <button className="quiz-btn" onClick={Return}>トップに戻る</button>
            </div>
        </div>
    )
  }

  return (
    <div className="quiz-content">
        <h1>Task4</h1>
        {currentQuiz && (
          <div className="quiz-area">
            <div>問題文: {currentQuiz.name}</div>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value="">選択してください</option>
              <option value={currentQuiz.select1}>{currentQuiz.select1}</option>
              <option value={currentQuiz.select2}>{currentQuiz.select2}</option>
            </select>
          </div>
        )}
        <button className="quiz-btn" onClick={Click}>回答</button>
    </div>
  )
}

export default Quiz