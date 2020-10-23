import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Video_Data_thumbnail from './components/Video_Data_thumbnail'
import Header from './components/Header/Header.jsx';
import Main_Container from './components/Main_Container/Main_Container';
import Side_Bar from './components/Side_Bar/Side_Bar';
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Header/>
        <div className="App__page">
        <Side_Bar />
          <Main_Container />
        </div>
    {/* <Video_Data_thumbnail /> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
