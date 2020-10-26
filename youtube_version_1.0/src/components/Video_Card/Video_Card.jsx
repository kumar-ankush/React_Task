import React from 'react';
import './Video_Card.css'

function Video_Card ({thumbnailURL,
    channelImageURL,
    postedDate,
    title,
    channelName,
    noOfViews,
    thumbnailSRC})  {
    return (
        //BEM is a naming convention for CSS
        <div className="videocard">
            <div className="image__Thumbnail">
            {/* <img className="videocard__Thumbnail" id="videocard__Thumbnail" src={thumbnailURL} /></div>  */}
            <video src={thumbnailSRC} className="videocard__Thumbnail" id="videocard__Thumbnail" poster={thumbnailURL}></video>
            </div>
              <div className="videoCard__info">
                    <div className="videoCard__ImageContainer">
                        <img src={channelImageURL} />
                    </div>
            
                <div className="videoCard__infoText">
                        <p className="videoCard__title">{title}</p>
                        <p className="videoCard__channelName">{channelName}</p>
                        <p className="videoCard__noOfViewspostedDate">{noOfViews} . {postedDate}</p>
                        {/* <p className="videoCard__postedDate">{postedDate}</p> */}
                            
                </div>
            </div>
            
        </div>
    );
}

export default Video_Card;
