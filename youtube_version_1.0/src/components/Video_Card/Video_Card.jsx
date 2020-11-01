import React,{ useState } from 'react';
import './Video_Card.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

function Video_Card ({thumbnailURL,
    channelImageURL,
    postedDate,
    title,
    channelName,
    noOfViews,
    thumbnailSRC,
    thumbnailVSRC,
    buttonLabel,
    Id,
    className}) 
    
    {
        var [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        //BEM is a naming convention for CSS
        <div className="videocard" onClick={toggle}>
            <div className="image__Thumbnail">
           <div> <img className="videocard__Thumbnail" id="videocard__Thumbnail" src={thumbnailURL} /></div> 
            </div>

            {/* The MOdel Start */}
            {/* <Link to={`/${title}/${Id}`}> */}
            <div>
            <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody>
        <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src={thumbnailVSRC} allowfullscreen></iframe>
        </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
      </div>
      {/* </Link> */}
            {/* The model End */}
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
