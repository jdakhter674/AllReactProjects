import React from 'react'
import './Home.css'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import StarsIcon from '@mui/icons-material/Stars';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';




const DemandSkills = () => {
    return (
        <div className="demand">
            <div className="demandIcons">
                <SlowMotionVideoIcon className="demand_main_icon"/>
                <h5 className="demand_title">
                Learn in-demand skills with over 155,000 video courses
                </h5>

            </div>
            <div className="demandIcons">
                <StarsIcon  className="demand_main_icon"/>
                <h5 className="demand_title">
                Choose courses taught by real-world experts
                </h5>

            </div>
            <div className="demandIcons">
                <OfflinePinIcon className="demand_main_icon"/>
                <h5 className="demand_title">
                Learn at your own pace, with lifetime access on mobile and desktop
                </h5>

            </div>
        </div>
    )
}

export default DemandSkills
