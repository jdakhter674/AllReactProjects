// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import React , {useState} from 'react';
// import Props from './props'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue} from './StateProvider'

// const user = null;

function App() {
  const [{user},dispatch]=useStateValue();



  return (


    <div className="app">
      {!user ? <Login /> :
        <>

          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />

          </div>
        </>
      }
    </div>

  );
}

export default App;
