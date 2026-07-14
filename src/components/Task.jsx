

function Task(props){



    return(
        <>
            <div className="task">
                <div className="text"
                    style={{textDecoration: props.completed? "line-through":"none"}}
                >
                    {props.text}
                </div>
                <button onClick={() => props.ondelete(props.id)}>
                    削除
                </button>
                <button onClick={() => props.oncomplete(props.id)}>
                    {props.completed ? "完了":"未完了"}
                </button>
            </div>
        
        </>
    )
}

export default Task