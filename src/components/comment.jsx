import { useEffect, useState } from "react"
import "./components.css"

function Comment(){

    const [text, setText] = useState("") 
    const [comments,setComments] = useState([])

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || []
        setComments(savedComments)
    },[])

    function Save(e){
        e.preventDefault()
        if(text === "")return

        const newComents = [...comments,text]

        setComments(newComents)
        localStorage.setItem("comments",JSON.stringify(newComents))
        alert("保存しました")

        setText("")
    }

    function Delete(id){
        const newComments = comments.filter((comments,i) => i !== id)

        setComments(newComments)
        localStorage.setItem("comments",JSON.stringify(newComments))
        
    }

    return(
        <div className="comment-area">
            <div className="view-area">
                <h2>Comments</h2>
                {comments.map((comment,id) => (
                    <div key={id} className="comment">
                        <p>{comment}</p >
                        <button onClick={() => Delete(id)}>削除</button>
                    </div>
                ))}
            </div>
            <form action="">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit" onClick={Save}>投稿</button>
            </form>
        </div>
    )
}

export default Comment