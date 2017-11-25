import React from 'react';
import Foot from "./images/foot.png"


export default function Footer() {

    return(
        <div className='container_width_standard footer_cont'>
            <img src={Foot} className='footer_image'/>
        </div>
    )
}