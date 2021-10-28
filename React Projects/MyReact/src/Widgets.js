import { Hidden } from '@material-ui/core';
import React from 'react';
import './Widgets.css'


function Widgets(){
    return(
        <div className="widget">

            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCrickPAK17&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=305031787613983"

            width="340px"
            
            style={{border:"none",height:"100%", overflow:"hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            >

            </iframe>
           
       
        </div>

    )
}



export default Widgets;