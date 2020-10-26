import React from 'react';
import './Thumbnail_V2.css';
const Thumbnail_V2 = (props) => {
    return (
        <div className="thumbnail__V2__Container">
            <div className="d-flex">
                {/* <div className="thumbnail__img">"https://i.ytimg.com/vi/T54LOlTFDD0/maxresdefault.jpg"</div> */}
                    <img id="thumbnail__img" src={props.img} alt="#"/>
                
                <div className="thumbnail__Data">
                    <div className="thumbnail__Title">
                            <h4>{props.Title}</h4>
                    </div>
                    <div className="d-flex thumbnail__Info">
                            <p>{props.Channel__Name}</p>
                            <p>{props.Views}</p><p>.</p><p>{props.Time}</p>
                    </div>
                    <div className="thumbnail__Description">
                        <p>{props.Description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Thumbnail_V2;
