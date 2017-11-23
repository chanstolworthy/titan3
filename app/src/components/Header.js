import React from 'react';
import Logo from './images/header_logo.png';
import Google from './images/google.png';
import Home from './images/home.svg';
import Flash from './images/flash.svg';
import Contact from './images/contact.svg';
import Folder from './images/folder.svg';


export default function Header() {

    return(
        <div>
            <div className='header_container container_width_standard'>
                <img src={Logo} className='header_logo'/>
                <div className='header_google_container'>
                    <img src={Google} className='header_google_logo' />
                    <div className='header_divider_line'></div>
                    <div className='header_nav_container'>
                        <div className='header_nav_item'>
                        <img src={Home} className='header_nav_icons'/>
                        HOME</div>
                        <div className='header_nav_item'>
                        <img src={Folder} className='header_nav_icons'/> 
                        PORTFOLIO</div>
                        <div className='header_nav_item'>
                        <img src={Contact} className='header_nav_icons'/>
                        CONTACT</div>
                        <div className='header_nav_item'>
                        <img src={Flash} className='header_nav_icons'/>
                        BLOG</div>
                    </div>
                </div>
            </div>
        </div>
    )
}