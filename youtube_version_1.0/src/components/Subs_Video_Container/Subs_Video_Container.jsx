import React,{ useState} from 'react';
import Video_Card from '../Video_Card/Video_Card';
import { Container, Row, Col } from 'reactstrap';
import './Subs_Video_Container.css'
const Subs_Video_Container = (props) => {
    // The 8 State Items Start from here
    var [state, usedState]=useState({items:[null]});
    
    usedState({
        items:[{ channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
        thumbnailURL:"https://i.ytimg.com/an_webp/pGMwT2bOJcI/mqdefault_6s.webp?du=3000&sqp=CNCex_wF&rs=AOn4CLB4jhnifKGbvIUsDKCyjwSIQKhsmA",
        title:"TestVideo",
        channelName:"Clever Programmer",
            noOfViews:"5M Views",
            postedDate:"3 Days ago"
    },
    {channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
    thumbnailURL:"https://i.ytimg.com/an_webp/VTV5wdp2ReQ/mqdefault_6s.webp?du=3000&sqp=COi2x_wF&rs=AOn4CLC-o8nOUYD9b-zEyUdht3gDmUOYcg", 
    title:"TestVideo" ,
    channelName:"Clever Programmer",
    noOfViews:"5M Views",
    postedDate:"3 Days ago"},
    {
        channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
        thumbnailURL:"https://i.ytimg.com/an_webp/46JOgUDyvss/mqdefault_6s.webp?du=3000&sqp=CJ6Yx_wF&rs=AOn4CLCYvC4HixZSA7EbIGNTXCbjoolDiQ", 
        title:"TestVideo" ,
        channelName:"Clever Programmer",
        noOfViews:"5M Views",
        postedDate:"3 Days ago"
    },
    {
        channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
            thumbnailURL:"https://i.ytimg.com/an_webp/CvMP2U7QD-c/mqdefault_6s.webp?du=3000&sqp=CK2xxvwF&rs=AOn4CLA--OSfdukHpEvDwMrPS5xn8-lzfw", 
            title:"TestVideo" ,
            channelName:"Clever Programmer",
            noOfViews:"5M Views",
            postedDate:"3 Days ago",
    }
],
 items2:[
   {
                channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
                    thumbnailURL:"https://i.ytimg.com/an_webp/gNtJ4HdMavo/mqdefault_6s.webp?du=3000&sqp=CN6jx_wF&rs=AOn4CLD43lfHNjMRK6bN3e7danfVSYw7tQ", 
                    title:"Top Gun:MEVERIK" ,
                    channelName:"Marvel",
                    noOfViews:"10M Views",
                    postedDate:"3 Days ago"
            },
            {
                channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
                    thumbnailURL:"https://i.ytimg.com/an_webp/9Yam5B_iasY/mqdefault_6s_480x270.webp?du=3000&sqp=COi0xvwF&rs=AOn4CLBtjb9N3UNN7oYvm2tJe3GNZjnTog" ,
                    title:"TestVideo" ,
                    channelName:"Clever Programmer",
                    noOfViews:"5M Views",
                    postedDate:"3 Days ago"
            },
            {
                channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
                    thumbnailURL:"https://i.ytimg.com/an_webp/R0Umn-tTwnY/mqdefault_6s.webp?du=3000&sqp=COC6xvwF&rs=AOn4CLB_hbY4_idyMI94Uz1ujHghz4wgpQ", 
                    title:"TestVideo" ,
                    channelName:"Clever Programmer",
                    noOfViews:"5M Views",
                    postedDate:"3 Days ago"
            },
            {
                channelImageURL:"https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png",
                thumbnailURL:"https://i.ytimg.com/an_webp/udYiXZ8PcDY/mqdefault_6s.webp?du=3000&sqp=CKypx_wF&rs=AOn4CLDVlUASLHL-U1iFAlBKUsLmkaGOsg", 
                title:"TestVideo" ,
                channelName:"Clever Programmer",
                noOfViews:"5M Views",
                postedDate:"3 Days ago"
            }
]
    })

    // The States End here
    return (

        <div className="Recomended_Container">
            <h4 className="Main_Container__title">{props.Container__Title}</h4>
        <div className="recomended__Videos">
            <Row>
            {state.items.map((x,i) => {
               return( <Col>
                    <Video_Card 
            channelImageURL={this.channelImageURL}
            thumbnailURL={x.thumbnailURL} 
           
            title={x.title}
            channelName={x.channelName}
            noOfViews={x.noOfViews}
            postedDate={x.postedDate}
            />
                </Col>)
            })}
              {/*  <Col>

         <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/pGMwT2bOJcI/mqdefault_6s.webp?du=3000&sqp=CNCex_wF&rs=AOn4CLB4jhnifKGbvIUsDKCyjwSIQKhsmA" 
           
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col>
               */}
</Row>
            <hr />
            {/* <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/VTV5wdp2ReQ/mqdefault_6s.webp?du=3000&sqp=COi2x_wF&rs=AOn4CLC-o8nOUYD9b-zEyUdht3gDmUOYcg" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col>
             <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/46JOgUDyvss/mqdefault_6s.webp?du=3000&sqp=CJ6Yx_wF&rs=AOn4CLCYvC4HixZSA7EbIGNTXCbjoolDiQ" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col>
             <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/CvMP2U7QD-c/mqdefault_6s.webp?du=3000&sqp=CK2xxvwF&rs=AOn4CLA--OSfdukHpEvDwMrPS5xn8-lzfw" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col></Row> */}
        </div>
        <div className="recomended__Videos">
            <Row>
                <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/gNtJ4HdMavo/mqdefault_6s.webp?du=3000&sqp=CN6jx_wF&rs=AOn4CLD43lfHNjMRK6bN3e7danfVSYw7tQ" 
            title="Top Gun:MEVERIK" 
            channelName="Marvel"
            noOfViews="10M Views"
            postedDate="3 Days ago"
            /></Col>
              <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/9Yam5B_iasY/mqdefault_6s_480x270.webp?du=3000&sqp=COi0xvwF&rs=AOn4CLBtjb9N3UNN7oYvm2tJe3GNZjnTog" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col>
             <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/R0Umn-tTwnY/mqdefault_6s.webp?du=3000&sqp=COC6xvwF&rs=AOn4CLB_hbY4_idyMI94Uz1ujHghz4wgpQ" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col>
             <Col>
        <Video_Card 
            channelImageURL="https://maxcdn.icons8.com/Share/icon/Cultures/ninja_head_filled1600.png"
            thumbnailURL="https://i.ytimg.com/an_webp/udYiXZ8PcDY/mqdefault_6s.webp?du=3000&sqp=CKypx_wF&rs=AOn4CLDVlUASLHL-U1iFAlBKUsLmkaGOsg" 
            title="TestVideo" 
            channelName="Clever Programmer"
            noOfViews="5M Views"
            postedDate="3 Days ago"
            /></Col></Row>
            
            
        </div>
            </div>    
            
    );
}

export default Subs_Video_Container;
