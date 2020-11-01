import React from 'react';
// import img1 from '../src/components/Image/music_80x80'
import './Trend_Header.css'
const Trend_Header = (props) => {
    return (
        <div className="d-flex" id="header__Container">
            <div className="sec-1">
                <img src="https://www.youtube.com/img/trending/chips/music_80x80.png" alt=""/>
                <h6>Music</h6>
            </div>
           
            <div className="sec-1">
            <img src="https://www.youtube.com/img/trending/chips/gaming_80x80.png" alt=""/>
                <h6>Gaming</h6>            
            </div>
            <div className="sec-1">
            <img src="https://www.youtube.com/img/trending/chips/news_80x80.png" alt=""/>
                <h6>News</h6>            
            </div>
            <div className="sec-1">
            <img src="https://www.youtube.com/img/trending/chips/movies_80x80.png" alt=""/>
                <h6>Movies</h6>
            </div>
            <div className="sec-1">
            <img src="https://www.youtube.com/img/trending/chips/fashion_80x80.png" alt=""/>
                <h6>Fashion 
                    and
                    Beauty</h6>
            </div>
        </div>
    );
}

export default Trend_Header;
