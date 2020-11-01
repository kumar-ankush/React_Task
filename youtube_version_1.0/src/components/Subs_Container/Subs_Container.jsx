import React from 'react';
import Header from '../Header/Header';
import './Subs_Container.css'
import Side_Bar from '../Side_Bar/Side_Bar';
import Subs_Video_Container from '../Subs_Video_Container/Subs_Video_Container';

const Subs_Container = () => {
    return (
        <div>
                            <Subs_Video_Container
                            Container__Title="Today"
                            />   
        </div>
    );
}

export default Subs_Container;
