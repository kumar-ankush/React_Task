import React,{useState} from 'react';
import './Thumbnail_V2.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Thumbnail_V2 = (props) => {
    var [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div className="thumbnail__V2__Container" onClick={toggle}>
            <div className="d-flex" id="adjust__Trend">
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
            {/* The Model Begins */}
            <div>
            <Modal isOpen={modal} toggle={props.toggle} className={props.className} size="lg">
        <ModalBody>
        <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src={props.thumbnailVSRC} allowfullscreen></iframe>
        </div>
        </ModalBody>
    <ModalFooter>
    <Button color="secondary" onClick={toggle}>Close</Button>
    </ModalFooter>
      </Modal>
      {/* The Model Ends */}
      </div>
        </div>
    );
}

export default Thumbnail_V2;
