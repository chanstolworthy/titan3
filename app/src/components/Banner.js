import React from 'react';
import DarkLogo from './images/dark_logo.png'


export default function Banner() {

    return(
        <div className='banner_main_container'>
            <div className=' container_width_standard'>

            </div>
            <div className='container_width_standard banner_body'>
                <div>
                    <div className='white_text banner_title_main'>BEST LOREM IPSUM TAG EVER</div>
                    <div  className='white_text banner_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia congue turpis, ac volutpat urna posuere sit amet. Phasellus sit amet metus vel justo rutrum venenatis eu quis risus.ipsum dolor sit amet, consectetur. ac volutpat urna posuere sit amet. Phasellus sitfa.</div>
                    <div className='banner_list_container'>
                        <div>
                            <div className='white_text list_item list_title'>A list of Items:</div>
                            <div className='white_text list_item'>item</div>
                            <div className='white_text list_item'>item ite</div>
                            <div className='white_text list_item'>itme titem</div>
                        </div>
                        <div className='banner-rectangle'></div>
                    </div>
                </div>
                <div className='banner_second_container'>
                <div className='banner_right_body'>
                    <img src={DarkLogo} className='darkLogo'/>
                    <div>
                        <div className='white_text list_item blue_item '>professional design</div>
                        <div className='white_text list_item dark_text'>+</div>
                    </div>
                    <div>
                        <div className='white_text list_item dark_text'>professional marketing</div>
                        <div className='white_text list_item dark_text'>+</div>
                    </div>
                    <div>
                        <div className='white_text list_item green_item'>custom development</div>
                        <div></div>
                    </div>
                    </div>
                    <div className='banner_solutions'> = high end solutions</div>

                    <div className='blue_button'>
                        <div>
                           
                        </div>
                        <span>SEE OUR WORK</span>
                    </div>

                </div>
            </div>
        </div>
    )
}