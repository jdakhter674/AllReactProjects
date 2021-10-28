import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Posting.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import firebase from './firebase'
import swal from 'sweetalert';



const options = ['Remove'];
const ITEM_HEIGHT = 28;





const Posting = ({ name, description,id, title, message, photoUrl }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [blue, setBlue] = useState(true)

    const colorChange = () => {
        setBlue(!blue)
    }
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // console.log(firebase)
        firebase.firestore().collection('posts').doc(id).delete()
        


    };

    const popUp=()=>{
        swal("You Shared your Post", "Click ok Button", "success");

    }

    let btn_class = blue ? "whiteButton" : "blueButton";
    const bgColor = ['rgb(16, 192, 16)', 'rgb(16, 72, 192)', 'rgb(16, 166, 192)', 'rgb(16, 146, 12)', 'rgb(36, 16, 192)', 'rgb(166, 16, 92)', 'rgb(192, 151, 16)', 'rgb(192, 16, 54)', 'rgb(92, 86, 50)']
    // let bgColorPicker=bgColor[Math.round(Math.random())*8]
    // console.log(bgColorPicker)


    return (
        <div className="posting">

            <div className="posting_information">

                {/* <Avatar /> */}
                <Avatar style={{ backgroundColor: `${bgColor[Math.round(Math.random()) * 8]}` }}>{name.substring(0, 2)}</Avatar>
                <div className="menuBar">
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 3.5,
                                width: '10ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'remove'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="post_infoo">
                    <h2>{name}</h2>
                    <p>Pakistan</p>
                </div>
            </div>

            <div className="posting_body">
                <p>{message}</p>

                <img src={photoUrl} />

            </div>

            <div className="iconList">
                <div>Like<ThumbUpAltIcon className={btn_class} onClick={colorChange} /></div>
                <div>Comment<CommentIcon /></div>
                <div>Share<ShareIcon onClick={popUp} /></div>
            </div>


        </div>
    )
}

export default Posting
