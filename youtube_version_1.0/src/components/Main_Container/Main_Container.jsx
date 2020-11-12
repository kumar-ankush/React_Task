import React,{ useState} from 'react';
import Video_Card from '../Video_Card/Video_Card';
import { Container, Row, Col } from 'reactstrap';

import './Main_Container.css'
const Main_Container = (props) => {
    // The 8 State Items Start from here
    var [state, usedState]=useState({
        items:[{ 
            id:Math.random()*100
            ,channelImageURL:"https://yt3.ggpht.com/a/AATXAJyGmGsoqFaLZSfvHWhJh3EOlURT94ZGtoCsC2Aivw=s48-c-k-c0xffffffff-no-nd-rj-mo",
        thumbnailURL:"https://www.vaitamin.com/wp-content/uploads/2020/04/40776/ozzy-osbourne-8211-ordinary-man-official-music-video-ft-elton-john.jpg",
        title:"Ozzy Osbourne - Ordinary Man (Official Music Video) ft. Elton John",
        channelName:"Ozzy Osbourne",
            noOfViews:"7.5M Views",
            postedDate:"Mar 10,2020",
            thumbnailVSRC:"https://www.youtube.com/embed/dBF78tA443A?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
    { id:Math.random()*100,
    channelImageURL:"https://yt3.ggpht.com/a/AATXAJxNWA8hmwAdUCbYsozFf8KQZLrJy06gGxKSslbX=s48-c-k-c0xffffffff-no-rj-mo",
    thumbnailURL:"https://i.ytimg.com/vi/S2cPMa6fRq8/maxresdefault.jpg",
    title:"Eminem - Godzilla ft. Juice WRLD (Dir. by @_ColeBennett_)" ,
    channelName:"Lyrical Lemonade",
    noOfViews:"2.6M Views",
    postedDate:"Mar 10,2020",
    thumbnailVSRC:"https://www.youtube.com/embed/r_0JjYUe5jo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
},
    {   id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJyREX07TNwpS2ixJmXiveEvSnqETlQVUAT5Duyhkg=s48-c-k-c0xffffffff-no-nd-rj-mo",
        thumbnailURL:"https://i.ytimg.com/vi/lEIqjoO0-Bs/maxresdefault.jpg", 
        title:"Megan Thee Stallion - Savage Remix (feat. Beyoncé) [Official Audio]" ,
        channelName:"Megan Thee Stallion",
        noOfViews:"5.6M Views",
        postedDate:"Apr 30,2020",
        thumbnailVSRC:"https://www.youtube.com/embed/lEIqjoO0-Bs?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
    {   id:Math.random()*100,
        channelImageURL:"https://yt3.ggpht.com/a/AATXAJzxLLfhOVZ9V7mEu8eAmNAIKk69tMNSwuQe57826w=s48-c-k-c0xffffffff-no-nd-rj-mo",
            thumbnailURL:"https://th.bing.com/th/id/OIP.fnkqiieoIPh2xOe0VOHZ9gHaEK?pid=Api&rs=1", 
            title:"Selena Gomez - Rare (Official Music Video)" ,
            channelName:"Selena Gomez",
            noOfViews:"8.3M Views",
            postedDate:"Jan 10,2020",
            thumbnailVSRC:"https://www.youtube.com/embed/ia1iuXbEaYQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
    },
{
                id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJwwmvNcoFMb9NpH-Uaq_1IQ-mbLb9_kRVwXABVdZg=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://th.bing.com/th/id/OIP.G9SqzZY7rsEc6hUfjudcQwHaEK?w=281&h=180&c=7&o=5&pid=1.7", 
                    title:"Top Gun: Maverick (2021) – New Trailer - Paramount Pictures" ,
                    channelName:"Paramount Pictures",
                    noOfViews:"15.4M Views",
                    postedDate:"Dec 16, 2019",
                    thumbnailVSRC:"https://www.youtube.com/embed/g4U4BQW9OEk?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJxWOHfvFn1W5PmZ7NAptpqzN8dvEd0INjaLufPAjQ=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://cdn.bollywoodbubble.com/wp-content/uploads/2020/10/The-White-Tiger-Trailer-1.jpg" ,
                    title:"THE WHITE TIGER Trailer (2020) Priyanka Chopra Jonas Movie" ,
                    channelName:"Movie Coverage",
                    noOfViews:"1.7M Views",
                    postedDate:"Oct 28, 2020",
                    thumbnailVSRC:"https://www.youtube.com/embed/8mJ_BuKgylA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"

            },
            {   id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJxeNpKIrFh3Ttv5B2_FttVz3lPEh51BA_VbXlMZ6w=s48-c-k-c0xffffffff-no-rj-mo",
                    thumbnailURL:"https://i.ytimg.com/vi/3od-kQMTZ9M/maxresdefault.jpg", 
                    title:"MONSTER HUNTER - Official Trailer (HD)MONSTER HUNTER - Official Trailer (HD)" ,
                    channelName:"Sony Pictures Entertainment",
                    noOfViews:"5.3M Views",
                    postedDate:"Oct 14,2020",
                    thumbnailVSRC:"https://www.youtube.com/embed/3od-kQMTZ9M?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            },
            {id:Math.random()*100,
                channelImageURL:"https://yt3.ggpht.com/a/AATXAJwnDS277yoIP6zFt1bZgmYVcn4SvFgZYTDgUK3BfA=s48-c-k-c0xffffffff-no-rj-mo",
                thumbnailURL:"https://i.ytimg.com/vi/8XpLS69oHE0/hqdefault.jpg", 
                title:"Mahabharat - Official Trailer | Aamir Khan | Hrithik Roshan | Prabhas | Deepika Padukone | Rajamouli" ,
                channelName:"Universal Fox Studio",
                noOfViews:"4M Views",
                postedDate:"Oct 24, 2020",
                thumbnailVSRC:"https://www.youtube.com/embed/HP0LUYgJQEI?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"
            }
]
    })

    // The States End here
    return (

        <div className="Recomended_Container">
            {/* <h4 className="Main_Container__title">{props.Container__Title}</h4> */}
            <h4 className="Main_Container__title">"Hello"</h4>
        <div className="recomended__Videos">
            <Row xs="4">
            {state.items.map(x => {
                return (<Col xs="8" sm="6" md="3" >
                    
                    <Video_Card
                    key={x.id}
                    Id={x.id}
                    channelImageURL= {x.channelImageURL}
                    thumbnailURL={x.thumbnailURL}
                    title={x.title}
                    channelName={x.channelName}
                    noOfViews={x.noOfViews}
                    postedDate={x.postedDate}
                    thumbnailVSRC={x.thumbnailVSRC}
                    
                />
                    {/* thumbnailVSRC="" */}
                    </Col>)
            })}
            </Row>
        </div>
            </div>    
            
    );
}

export default Main_Container;
