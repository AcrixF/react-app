import React, { Component } from 'react';
import './App.css';

import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer"
import Home from "./Home/Home";


class App extends Component {

 render() {
   return (
       <div className="App">
         <Header title="Welcome to CodeJobs"/>
         <Content>
             <Home/>
         </Content>
         <Footer/>
       </div>
   );
 }

}

export default App;
