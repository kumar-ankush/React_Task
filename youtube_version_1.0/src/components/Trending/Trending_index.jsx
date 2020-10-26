import React from 'react';
import Header from '../Header/Header';
import Side_Bar from '../Side_Bar/Side_Bar';
import Thumbnail_V2 from '../Thumbnail_T_V2/Thumbnail_V2';
import Trend_Header from '../Trend_Header/Trend_Header';
import './Trending_index.css'

const Trending_index = () => {
    return (
       
            <div className="App">
                <Header/>
                        <div className="App__page">
                                <div className="side__Bar"><Side_Bar /></div>
                                    <div className="Trend__Container">
                                            <Trend_Header />
                                                <Thumbnail_V2
                                                        img="https://i.ytimg.com/vi/T54LOlTFDD0/maxresdefault.jpg"
                                                        Title="GULZAAR CHHANIWALA | CHANDRASHEKHAR (Official Video) | Latest Haryanvi Song 2020 | Speed Records
                                                        "
                                                        Channel__Name="Speed Records Haryanvi"
                                                        Views="10M"
                                                        Time="4 days ago"
                                                        Description="Speed Records Haryanvi Presents the Official Video of Gulzaar Chhaniwala's 'Chandrashekhar'. Besides giving his voice to the song, Gulzaar has penned the lyrics and has also composed the song...." />

<Thumbnail_V2
                                                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdN7GgLVikNCsXwwJHpsu53DSIAr0l2ecP3A&usqp=CAU"
                                                        Title="Top Gun Mevrick"
                                                        Channel__Name="QuickyBaby"
                                                        Views="10M"
                                                        Time="4 days ago"
                                                        Description="Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run." />

<Thumbnail_V2
                                                        img="https://www.visme.co/wp-content/uploads/2020/08/Visme4-Free-Thumbnail-Maker.jpg"
                                                        Title="Top Gun Mevrick"
                                                        Channel__Name="QuickyBaby"
                                                        Views="10M"
                                                        Time="4 days ago"
                                                        Description="Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run." />
                                                                     <Thumbnail_V2
                                                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuwqOU29dB713Dt46QFwzqH45_UtKeG8ZDrQ&usqp=CAU"
                                                        Title="Top Gun Mevrick"
                                                        Channel__Name="QuickyBaby"
                                                        Views="10M"
                                                        Time="4 days ago"
                                                        Description="Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run.
                                                                    Hi my name is ankush and this is the test run." /> 
                                                                    <Thumbnail_V2
                                                                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyuOY44yUzpPYvKshVDjNfHoZNel4aMiBmPA&usqp=CAU"
                                                                    Title="Top Gun Mevrick"
                                                                    Channel__Name="QuickyBaby"
                                                                    Views="10M"
                                                                    Time="4 days ago"
                                                                    Description="Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run.
                                                                                Hi my name is ankush and this is the test run." />
                                    </div>
                        </div>
                </div>
        
    );
}

export default Trending_index;
