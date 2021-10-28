import React, { useEffect, useState } from 'react'
import './Post.css'
import Posts from './Posts'
import Posting from './Posting';
import firebase from './firebase'


const Post = () => {
  const [posts,setPosts]=useState([])


  useEffect(()=>{
   firebase.firestore().collection('posts').orderBy('timeStamp','desc').onSnapshot(snapshot=>
     setPosts(snapshot.docs.map(doc=>
     ( {
        id:doc.id
        ,data:doc.data()
      })
      ))
   )
  },[])
  // console.log(posts)

    return (
        <>
          <div className="main_feed">

          {/* <h1>hello</h1> */}
          <Posts />
          </div>



          <div className="main_post" >
            {posts.map((post)=>(

          <Posting 
          name={post.data.name}
          // title="hello" 
          description={post.data.description}
          key={post.id}
          message={post.data.message}
          photoUrl={post.data.photoUrl}
          id={post.id}
          />
            ))}

          </div>
        </>
    )
}

export default Post
