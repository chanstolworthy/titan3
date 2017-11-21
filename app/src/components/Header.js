import React from 'react';
import Logo from './images/header_logo.png'
import Google from './images/google.png'


export default function Header() {

    return(
        <div>
            <div className='header_container container_width_standard'>
                <img src={Logo} className='header_logo'/>
                <div className='header_google_container'>
                    <img src={Google} className='header_google_logo' />
                    <div className='header_divider_line'></div>
                    <div className='header_nav_container'>
                        <div className='header_nav_item'>HOME</div>
                        <div className='header_nav_item'>PORTFOLIO</div>
                        <div className='header_nav_item'>CONTACT</div>
                        <div className='header_nav_item'>BLOG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}