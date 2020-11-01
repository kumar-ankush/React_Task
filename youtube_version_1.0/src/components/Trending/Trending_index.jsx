import React,{useState} from 'react';
import  '../Header/Header.css';
import Thumbnail_V2 from '../Thumbnail_T_V2/Thumbnail_V2';
import Trend_Header from '../Trend_Header/Trend_Header';
import { Container, Row, Col } from 'reactstrap';
import './Trending_index.css'

const Trending_index = (props) => {
   var [state,usedState]=useState(
       {
           items:[{
            img:"https://timesofindia.indiatimes.com/photo/78844010/size-186223/78844010.jpg",
            Title:"BACHALO (Official Video) Akhil | Nirmaan | Enzo | New Punjabi Song 2020 | Latest Punjabi Love Songs",
            Channel__Name:"White Hill Music",
            Views:"11M",
            Time:"Oct 26, 2020",
            Description:"And the wait is over. Listen & Enjoy our latest melodious track by Akhil featuring Rumman Ahmed.This song is a story of a university student who has secret crush on his teacher.The video is.", 
            thumbnailVSRC:"https://www.youtube.com/embed/SdO4L0IVsGs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           },{
            img:"https://1.bp.blogspot.com/-drk1dv0mRsI/X5pREH3mSXI/AAAAAAAABSs/SzVbRPgmi_cV6l8JSAX5TU-s2bvwbZoEQCLcBGAsYHQ/w1200-h630-p-k-no-nu/IMG_20201029_104924.webp",
            Title:"Mujhe Peene Do - Darshan Raval | Official Music Video | Romantic Song 2020 | Indie Music Label |",
            Channel__Name:"Indie Music Label",
            Views:"1.8M",
            Time:"9 hours ago",
            Description:"It's time to raise a toast in the name of that someone special who once used to be close to you. Darshan Raval's Mujhe Peene Do is that perfect evening mood song.", 
            thumbnailVSRC:"https://www.youtube.com/embed/tOXMlseYc7E?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           },
           {
            img:"https://i.ytimg.com/vi/N-SwCLGdpRE/hqdefault.jpg",
            Title:"Eddan Ni (Official Video) Amrit Maan Ft Bohemia | Himanshi khurana |Latest Punjabi Songs 2020 |",
            Channel__Name:"BANG Music",
            Views:"3.7M",
            Time:"Oct 28, 2020",
            Description:"Eddan Ni (Official Video) Amrit Maan Ft Bohemia | Latest Punjabi Songs 2020 | New Punjabi Songs 2020 BANG Music Management: India: 9721000003, 7830950004 UK: +44 7403 35 7403", 
            thumbnailVSRC:"https://www.youtube.com/embed/N-SwCLGdpRE?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           },
           {
            img:"https://i.ytimg.com/vi/LP6ppSM3xq4/maxresdefault.jpg",
            Title:"iPhone 12 Pro Durability Test - Is 'Ceramic Shield' Scratchproof?!",
            Channel__Name:"JerryRigEverything",
            Views:"3.6M",
            Time:"Oct 28, 2020",
            Description:"Its time to durability test the new Apple iPhone 12 Pro. Grab your Anker Nano HERE: https://amzn.to/353xHsa (US Offer Code USNANO12) And grab your dbrand glass Screen Protector", 
            thumbnailVSRC:"https://www.youtube.com/embed/LP6ppSM3xq4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           },
           {
            img:"https://i.ytimg.com/vi/TMN2YJ6z9RE/maxresdefault.jpg",
            Title:"Ramaraju For Bheem - Bheem Intro - RRR (Telugu) | NTR, Ram Charan, Ajay Devgn, Alia | SS Rajamouli",
            Channel__Name:"DVV Entertainment",
            Views:"25M",
            Time:"Oct 21, 2020",
            Description:"Here’s NTR’s First Look Video from RRR Movie (Telugu). Introducing Bheem to you all by Ramaraju.. #RRR #BheemFirstLook #NTR Cast: NTR, Ram Charan, Ajay Devgn, Alia Bhatt, Olivia Morris,...", 
            thumbnailVSRC:"https://www.youtube.com/embed/BN1MwXUR3PM?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           },
           {
            img:"https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Radhe_shyam_motion_poster_1200.jpg?itok=8vCxbJl0",
            Title:"Beats Of Radhe Shyam | Prabhas | Pooja Hegde | Radha Krishna Kumar | Happy Birthday Prabhas",
            Channel__Name:"UV Creations",
            Views:"9.4M",
            Time:"Oct 22, 2020",
            Description:"Beats Of Radhe Shyam On UV Creations. Radhe Shyam is an upcoming Indian romantic drama film starring Rebel Star Prabhas and Pooja Hegde. Written and directed by Radha Krishna Kumar. Music by..", 
            thumbnailVSRC:"https://www.youtube.com/embed/Ffp2i537Fiw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
           }
        ]}
   )
   var [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (                            <div className="Trend__Container " onClick={toggle}>
                                         <Trend_Header /> 
                                        {state.items.map(x =>{
                                           return (
                                           <Row id="row__Trend">
                                                <Col>
                                                <Thumbnail_V2
                                                        img={x.img}
                                                        Title={x.Title}
                                                        Channel__Name={x.Channel__Name}
                                                        Views={x.Views}
                                                        Time={x.Time}
                                                        Description={x.Description}
                                                        thumbnailVSRC={x.thumbnailVSRC}
                                                        />
                                                </Col>
                                            </Row>)
                                        })}
                                               
                                    </div>
                                    
               
        
    );
}

export default Trending_index;
