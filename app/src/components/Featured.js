import React from 'react';
import FeaturedImage from './images/featured_image.png'


export default function Featured() {

    return(
        <div className='featured_image_container container_width_standard'>
            <img src={FeaturedImage} className='featured_image' />
            <div className='featured_slider_circles_container'>
                <div id='selected_slider'></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}