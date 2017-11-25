import React from 'react';
import Not from './images/not.png'
import Header_logo from './images/header_logo.png'
import Bolt from './images/bolt.png'


export default function Content() {

    return (
        <div className=' container_width_standard column_layout'>
            <div className='column_layout_body'>
                <div className='bottom_section_seo'>
                    <div>
                        <img src={Not} />
                        <div className='blue_title column_small_seo'>WHO WE ARE</div>
                        <div className='dark_body_text column_small_seo'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, japo nde varia ha heta la cuera</div>
                    </div>

                    <div>
                        <img src={Not} />
                        <div className='blue_title column_small_seo'>WHO WE ARE</div>
                        <div className='dark_body_text  column_small_seo'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, japo nde varia ha heta la cuera</div>
                    </div>

                    <div>
                        <img src={Not} />
                        <div className='blue_title column_small_seo'>WHO WE ARE</div>
                        <div className='dark_body_text column_small_seo'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, japo nde varia ha heta la cuera</div>
                    </div>
                </div>
                <div className='full_width_seo'>
                    <div className='blue_title'>SEO CONTENT</div>
                    <div className='dark_body_text'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ocillum olor horhar yiplum helo rathal lor horhar yiplum helo rathal eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, japo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum olor horhar yiplum helo rathal eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud cillum olor horhar yiplum helo rathal uju hallow jersty, </div>

                </div>
            </div>
            <div className='right_column_sub_cont'>
                <div className='right_container_content'>
                    <div className='small_blue_text'>cool numbers/ client performance</div>

                    <div className='side_bar_body'>
                    <div>
                    <div className='blue_button_image button_image_container'>
                        <div className='light_blue_section'>

                        </div>
                        <div className='title_image_cont'>
                            <span className='title_button_text'>SEE PRICING</span>
                            <img src={Bolt} />
                        </div>
                    </div>
                    
                    <div className='small_grey'>
                        With a commitment to quality web content
                        </div>
                    <div className='small_grey'>
                        for the world wide web.
                            </div>
                    <div className='small_grey'>
                        LavaVolt. Made in USA.2012.
                    </div>
                    </div>
                    </div>

                </div>
                <img src={Header_logo} className='seo_content_logo' />
            </div>
        </div>
    )
}