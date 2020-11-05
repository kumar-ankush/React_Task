import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Video_Data_thumbnail from './components/Video_Data_thumbnail'
import Header from './components/Header/Header.jsx';
import Main_Container from './components/Main_Container/Main_Container';
import Side_Bar from './components/Side_Bar/Side_Bar';

import Trending_index from './components/Trending/Trending_index';
import Subs_Container from './components/Subs_Container/Subs_Container';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login_Container from './components/Login_Container/Login_Container';
import LoginForm from './components/LoginForm/LoginForm';

ReactDOM.render(
  <React.StrictMode> {/*// You have to wrap everything inside the Browser Router to make it work rouitng */}
   {/* <div className="App">
    
    <LoginForm />
  </div> */}
 <BrowserRouter> 
    <div className="App">
      <Header/>
        <div className="App__page">
        <Side_Bar id={Math.random()*1000}/>
         <Switch>
            <Route path="/" exact component={Main_Container} />
            <Route path="/trend-index/:id" component={Trending_index} />
            <Route path="/subs/:id" component={Subs_Container } />
            <Route path="/login" component={LoginForm} />
          </Switch> 
         
         
        </div> 
    </div>
    </BrowserRouter>
    {/* <Trending_index /> */}
    {/* <Subs_Container /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
