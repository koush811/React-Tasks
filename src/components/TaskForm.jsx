import { useState } from "react"
import Task from "./Task"

function TaskForm(){
    const [data,setData] = useState([])
    const [text, setText] = useState("") 

    function AddTask(e){
        e.preventDefault()
        if(text.trim() === "") return
        
        const newTask = {
            id: Date.now(),
            text: text,
        }

        setData([...data,newTask])
    }

    function completeTask(id){
        setData(
            data.map((task) => {
                if(task.id === id){
                    return{
                        ...task,
                        completed: !task.completed
                    }
                }else{
                    return task
                }
        })
        )
    }

    function deleteTask(id){
        setData(data.filter(task => task.id != id))
    }

    return(
        <>
            <div className="task-area">
                {data.map((task)=>(
                    <Task 
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        completed={task.completed}
                        oncomplete={completeTask}
                        ondelete={deleteTask}
                    >    
                    </Task>
                ))}
            </div>

            <form onSubmit={AddTask}>
                <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                <button type="submit">追加</button>
            </form>


        </>
    )
}

export default TaskForm