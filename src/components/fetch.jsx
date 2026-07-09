import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Fetch  = ()=>{
    const [posts,setposts] = useState([])

    useEffect(() => {
        fetch(' https://jsonplaceholder.typicode.com/posts ',{method: 'GET'})
        .then(res => res.json())
        .then(data => {
            setposts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Fetch