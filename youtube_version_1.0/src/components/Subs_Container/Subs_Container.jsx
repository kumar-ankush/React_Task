import React from 'react';
import Header from '../Header/Header';

import Side_Bar from '../Side_Bar/Side_Bar';
import Subs_Video_Container from '../Subs_Video_Container/Subs_Video_Container';

const Subs_Container = () => {
    return (
        <div>
             <div className="App">
                <Header/>
                    <div className="App__page">
                        <Side_Bar />
                            {/* <Main_Container 
                            Container__Title="Recommended"/> */}
                            <Subs_Video_Container
                            Container__Title="Today"
                            />
                    </div> 
                </div>
        </div>
    );
}

export default Subs_Container;
