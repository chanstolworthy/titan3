import React from 'react';
import HeaderLogo from'./images/header_logo.png';
import Pic1 from './images/pic1.png'
import Pic2 from './images/pic2.png'
import social from './images/social.png'



export default function MiniFeatures() {

    return(
        <div className=' container_width_standard'>
        <div className='top_body'>
            <div className='mini_top_container '>
                <div className='lrg_dark_text'>SOME WORDS ABOUT</div>
                <img src={HeaderLogo} className='min_logo' />
            </div>
            <div className='social_container'>
                <div>GET SOCIAL</div>
                <img src={social} />
                </div>
            </div>
            <div className='bottom_section'>
                <div>
                    <img src={Pic1} className='image_sizing'/>
                    <div className='blue_title'>WHO WE ARE</div>
                    <div className='dark_body_text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum olor horhar yiplum helo rathal</div>
                </div>
                <div>
                    <img src={Pic1} className='image_sizing'/>
                    <div className='blue_title'>DEVELOPMENT TEAM</div>
                    <div className='dark_body_text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum olor horhar yiplum helo rathal</div>
                </div>
                <div>
                    <img src={Pic2} className='image_sizing'/>
                    <div className='blue_title'>FEATURED CLIENTS</div>
                    <div className='dark_body_text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum olor horhar yiplum helo rathal</div>
                </div>
                <div>
                    <img src={Pic2} className='image_sizing'/>
                    <div className='blue_title'>OUR CAPABILITIES</div>
                    <div className='dark_body_text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum olor horhar yiplum helo rathal</div>
                </div>
            </div>
        </div>
    )
}