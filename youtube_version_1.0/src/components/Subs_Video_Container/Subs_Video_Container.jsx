import React,{ useState} from 'react';
import Video_Card from '../Video_Card/Video_Card';
import { Container, Row, Col } from 'reactstrap';
import './Subs_Video_Container.css'
const Subs_Video_Container = (props) => {
    // The 8 State Items Start from here
    var [state, usedState]=useState({
        items:[{ id:Math.random()*100,
             channelImageURL:"https://yt3.ggpht.com/a/AATXAJx9FI52acTzFh2jRrKCaq7GpRlpsBEJnSTXbvk=s48-c-k-c0xffffffff-no-rj-mo",
        thumbnailURL:"https://i.ytimg.com/vi/zsmcSN7sW0s/maxresdefault.jpg",
        title:"Adhiya (Official Video) | Karan Aujla | YeahProof | Street Gang Music| Latest Punjabi Songs | Sky",
        channelName:"Street Gang Music",
            noOfViews:"20M Views",
            postedDate:"Oct 22, 2020",
            thumbnailVSRC:"https://www.youtube.com/embed/zsmcSN7sW0s?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
    {id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJxMSyH4sTrwt5clNLxfifS8UNqJYqpmUoNFJi7UkQ=s48-c-k-c0xffffffff-no-rj-mo",
    thumbnailURL:"https://i.ytimg.com/vi/QjeB3otcISQ/maxresdefault.jpg", 
    title:"Soorarai Pottru - Official Trailer | Suriya, Aparna | Sudha Kongara|GV Prakash|Amazon Original Movie" ,
    channelName:"Amazon Prime Video India",
    noOfViews:"15M Views",
    postedDate:"Oct 25, 2020",
    thumbnailVSRC:"https://www.youtube.com/embed/fa_DIwRsa9o?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
},
    {   id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJxPZjpbVgiPEYvJ0SBNn6TelKupfEMS9wJX05O8Mg=s48-c-k-c0xffffffff-no-rj-mo",
        thumbnailURL:"https://i.ytimg.com/vi/gZygKPjekmY/maxresdefault.jpg", 
        title:"MASSTAANI (Official Video) | B PRAAK | JAANI | Arvindr Khaira | New Punjabi Song 2018" ,
        channelName:"Speed Records",
        noOfViews:"74M Views",
        postedDate:"Jul 24, 2018",
        thumbnailVSRC:"https://www.youtube.com/embed/ds9wPCvm4Aw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
    {   id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJxSX50TiCEcLMYJEgLBD6zY3juuocEeuF9j2las=s48-c-k-c0xffffffff-no-rj-mo",
            thumbnailURL:"https://1.bp.blogspot.com/-MSCGttCyOgs/XzJoUzDJ_sI/AAAAAAAADJs/_2paawcBI6IH3RGsPDWJnvHYaaL5KM7VgCLcBGAsYHQ/s1280/Kya%2BBaat%2BAa%2BLyrics%2B-%2BKaran%2BAujla%2BFeat%2BTania.jpg", 
            title:"Kya Baat Aa : Karan Aujla (Official Video) Tania | Sukh Sanghera Desi Crew | Latest Punjabi Songs" ,
            channelName:"Rehaan Records",
            noOfViews:"120M Views",
            postedDate:"Aug 11, 2020",
            thumbnailVSRC:"https://www.youtube.com/embed/x-KbnJ9fvJc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
    {   id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJzpR5tFKt853Ffo-hqY5QFV1I0fhAdoAwg5DOPwwg=s48-c-k-c0xffffffff-no-rj-mo",
            thumbnailURL:"https://i.ytimg.com/vi/wLBrjrcMlCo/maxresdefault.jpg", 
            title:"Rabb Khair Kare - Full Video | DAANA PAANI | Prabh Gill | Shipra Goyal |Jimmy Sheirgill |Simi Chahal" ,
            channelName:"Rhythm Boyz",
            noOfViews:"8.6M Views",
            postedDate:"Apr 19, 2018",
            thumbnailVSRC:"https://www.youtube.com/embed/wLBrjrcMlCo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
   {   id:Math.random()*100,             
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJyhYSqODSvnxONgFC5VmYz_3C_9dCknjQq_7brMaA=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://i.ytimg.com/vi/JkYJmXYreeA/maxresdefault.jpg", 
                    title:"VIAH : JASS MANAK (Official Video) Satti Dhillon | Latest Punjabi Song 2019 | GK.DIGITAL | Geet MP3" ,
                    channelName:"Geet MP3",
                    noOfViews:"146M Views",
                    postedDate:"Apr 13, 2019",
                    thumbnailVSRC:"https://www.youtube.com/embed/JkYJmXYreeA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJwr1dtTFcyXx54e8_B39RL9reJjc71lx54E3cQB=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://i.ytimg.com/vi/jLodQ2K7Ts4/maxresdefault.jpg" ,
                    title:"FAUG OFFICIAL TRAILER" ,
                    channelName:"nCore Games",
                    noOfViews:"2M Views",
                    postedDate:"Oct 25, 2020",
                    thumbnailVSRC:"https://www.youtube.com/embed/7HgeZHs7hcU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJy-a2tLbpeoSGXW_HKBhYH-sVTDiBpo7a5S5RIgsw=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://i.ytimg.com/vi/oXe57uRRlPk/hqdefault.jpg", 
                    title:"Someone like you (1080p) [HD] - Adele Live at The Royal Albert Hall (2011)" ,
                    channelName:"Franco",
                    noOfViews:"5.8M Views",
                    postedDate:"Mar 14, 2014",
                    thumbnailVSRC:"https://www.youtube.com/embed/oXe57uRRlPk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJzDoflxgU4P5Plnh-sh7Tv9UYHvaMuumR1T6aD05A=s48-c-k-c0xffffffff-no-rj-mo",
                thumbnailURL:"https://cdn.qatar-soccer.net/2020/10/5f99a2674bc84.jpg", 
                title:"Jurgen Klopp reveals which player should be Liverpool manager! Exclusive interview with Laura Woods" ,
                channelName:"talkSPORT",
                noOfViews:"8k Views",
                postedDate:"Oct 28, 2020",
                thumbnailVSRC:"https://www.youtube.com/embed/3Bmx72-8heA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJz2qX0OAytBZwtJX34o6G70lApFGBSASP7OTN2bHOA=s48-c-k-c0xffffffff-no-rj-mo",
                thumbnailURL:"https://i.ytimg.com/vi/YKe7bWGejVc/hqdefault.jpg", 
                title:"Klopp's Reaction: Fabinho, 10,000 goals and more | Liverpool vs Midtjylland" ,
                channelName:"Liverpool FC",
                noOfViews:"2.2M Views",
                postedDate:"Oct 28, 2020",
                thumbnailVSRC:"https://www.youtube.com/embed/YKe7bWGejVc?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"

            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJyCilzOYPnArtUDsmTPsoqLdXObZjQBWzuClTJEkQ=s48-c-k-c0xffffffff-no-nd-rj-mo",
                thumbnailURL:"https://i.ytimg.com/vi/7dp4GLm7sgo/maxresdefault.jpg", 
                title:"Lady Antebellum - Need You Now (Live)" ,
                channelName:"Lady A",
                noOfViews:"32M Views",
                postedDate:"Nov 8, 2016",
                thumbnailVSRC:"https://www.youtube.com/embed/7dp4GLm7sgo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJzVBGU-QyENevFp8etYX1iEak8Y7KEjUPsucWAvAA=s48-c-k-c0xffffffff-no-rj-mo",
                thumbnailURL:"https://i.ytimg.com/vi/w3jLJU7DT5E/hqdefault.jpg", 
                title:"What is GitHub?" ,
                channelName:"GitHub",
                noOfViews:"1M Views",
                postedDate:"20 Dec 2016",
                thumbnailVSRC:"https://www.youtube.com/embed/w3jLJU7DT5E?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            }
]
    })

    // The States End here
    return (

        <div className="Recomended_Container">
            <h4 className="Main_Container__title">{props.Container__Title}</h4>
        <div className="recomended__Videos">
        <Row>
            {state.items.map(x => {
               return( <Col xs="8" sm="6" md="3" xl="3">
                    <Video_Card 
                    key={x.id}
                    Id={x.id}
            channelImageURL={x.channelImageURL}
            thumbnailURL={x.thumbnailURL} 
           
            title={x.title}
            channelName={x.channelName}
            noOfViews={x.noOfViews}
            postedDate={x.postedDate}
            thumbnailVSRC={x.thumbnailVSRC}
            />
                </Col>)
            })}
</Row>
            <hr />
        </div>
        
            </div>    
            
    );
}

export default Subs_Video_Container;
