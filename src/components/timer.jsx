import { useEffect, useRef, useState } from "react"

function Timer() {
    const [startTime,setStartTime] = useState(0)
    const [time,setTime] = useState(0)
    const [isStart, setIsStart] = useState(false)
    const interval = useRef(null)

    const Start = () => {
        if(isStart) return

        setIsStart(true)
        if(startTime === 0) return
        if(time === 0){
            setTime(startTime)
        }

        
        interval.current = setInterval(() => {
            setTime(prev => {
                if(prev <= 1){
                    clearInterval(interval.current)
                    setIsStart(false)
                    alert("終了")
                    return 0
                }
                return prev -1
            })
        }, 1000)
    }

    const Stop = () => {
        clearInterval(interval.current)
        setIsStart(false)
        interval.current
    }

    const Reset = () => {
        Stop()
        setTime(0)
        setStartTime(0)
    }

    return (
        <div className="timer">
            <h1>Task3</h1>
            <div>
                設定時間：
                <input type="number" value={startTime} onChange={(e) => {setStartTime(e.target.value)}}/>
            </div>
            <h1>残り時間：{time}</h1>
            <div className="btns">
                <button onClick={Start}>スタート</button>
                <button onClick={Stop}>停止</button>
                <button onClick={Reset}>リセット</button>
            </div>
        </div>
    )
}

export default Timer