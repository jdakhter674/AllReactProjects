import React , {useState,useEffect} from 'react';
import "./feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post.js'
import db from './firebase'



function Feed(){

const [posts , setPosts]=useState([]);

useEffect(() => {
    db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot=>(

        setPosts(snapshot.docs.map(doc =>(   {id :doc.id, data:doc.data()  }  ) ) )
    ))
}, [])


    return (

        <div className="feed">
          <StoryReel />
          <MessageSender />
      {posts.map((post)=>(
          <Post 
        key={post.id}
        profilePic={post.data.profilePic}
        timestamp={post.data.timestamp}
        userName={post.data.userName}
        message={post.data.message}
        image={post.data.image}
          />


      ))}

        
          {/* <Post 
        
          image="https://1.bp.blogspot.com/-eHMRBZoXY2E/WyvqKaJOSRI/AAAAAAAAAhs/S7V8TraayXEyliDRsXZqaoPS5_SALlvfACLcBGAs/s1600/romantic-poetry-in-urdu-for-lovers.jpg"
          profilePic="https://i.pinimg.com/736x/55/e5/e7/55e5e71c5705c056848d2b3ab366a515.jpg"
          timestamp="timestamp"
          userName="jawwad"
          message="Hy"
          />
          <Post />
          <Post /> */}
    </div>
        )
}



export default Feed;