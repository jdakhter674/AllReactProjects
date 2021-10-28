import React , {useState} from 'react'
import "./MessageSender.css"
import {Avatar} from '@material-ui/core'
// import  VideocamIcon  from '@material-ui/icons';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {useStateValue} from './StateProvider'
import db from './firebase'
import firebase from 'firebase'







function MessageSender(){
    const [{user},dispatch]=useStateValue();
    const [input , setInput]=useState("")
    const [imagUrl , setImageUrl]=useState("")

    const handleSubmit= (e)=>{
        e.preventDefault();
        db.collection('posts').add({
          message:input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          profilePic:user.photoURL ,
          userName :user.displayName,
          image:imagUrl 
        })





        setInput("")
        setImageUrl("")

    }
    return(
        <div className="messageSender">
            <div className="messageSender__top">
             <Avatar src = {user.photoURL} />
             <form>

             <input value={input} onChange={(e)=>setInput(e.target.value)} className ="messageSender__Input" placeholder={`Hey ${user.displayName} What's on your mind ?`} type="text" />
             <input value={imagUrl} onChange={e=>setImageUrl(e.target.value)}  placeholder="Image URL (optional)" type="text" />
             <button
             onClick={handleSubmit}
             type="submit"
             >Submit</button>
             </form>


            </div>
            
            
            
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>

                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo / Video</h3>

                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling / Acticity</h3>

                </div>



            </div>

        </div>

    )
}


export default MessageSender;