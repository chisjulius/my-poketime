
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home (){
    const [posts, setPosts] = useState([])

    
    useEffect (() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data.slice(0,10))
        })
    },[])
     
  
/** 
useEffect (()=> {
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data.slice(0,10)) 
    }
    getPosts()
},[])
**/
const postList = posts.length ? (
    posts.map(post => {
        return (
            <div className="post card" key={post.id}>
                <div className="card-content">
                    <Link to={'/' + post.id}>
                      <span className="card-title">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })
) : ( 
<div className="center">No posts yet</div>
)
return(
   <div className="container">
       <h4 className="center">Home</h4>
       {postList}
   </div>
)
}
export default Home

  