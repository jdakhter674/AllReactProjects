import React, { useState } from 'react'
import './Posts.css'
import SendIcon from '@material-ui/icons/Send';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import firebas from './firebase'
import Posting from './Posting';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import firebase from 'firebase'



const Posts = () => {

    const [input, setInput] = useState("")
    const user = useSelector(state => state.userReducer.name)
    const [photoUrl, setPhotoUrl] = useState("")



    const photoTake = () => {
        swal("Copy paste your image url", {
            content: "input",
          })
          .then((value) => {
              setPhotoUrl(value)
            // swal(`You typed: ${value}`);
          });
    }
    // console.log(photoUrl)

    const handleSubmit = (e) => {
        e.preventDefault();

        firebas.firestore().collection('posts').add({
            name: user ? user : "Someone",
            message: input,
            photoUrl: photoUrl,
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()


        })

        setInput("")



    }







    return (
        <>
            <div className="mainBox">
                <div className="input__container">
                    <form>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Ideas.." />
                        <button type="submit" onClick={handleSubmit} ><SendIcon className="sendIcon" /></button>
                    </form>

                    <div className="iconList">
                        <div>Photos<PhotoSizeSelectActualIcon onClick={photoTake} className="photosIcon" /></div>
                        <div>Videos<VideoLibraryIcon className="videosIcon" /></div>
                        <div>Event<EventIcon className="EventIcon" /></div>
                    </div>

                </div>
            </div>
            {/* <div className="main_feed">
            {posts.map(({id,data:{name,message,photoUrl}})=>{

          <Posting  
          name="jawwad akhter" 
          title="hello" 
          description="hello world" 
          message="this is message"
           />
            })}

          </div> */}



        </>
    )
}

export default Posts
