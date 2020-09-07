import React, { useState } from 'react';
// import './App.css';
// import './font-awesome-4.7.0/css/font-awesome.min.css';
// import { Container, Box } from '@material-ui/core';
// import useScript from 'usescript-hook';
// import CircularProgressWithLabel from './circularProgress';
// import google from './assets/images/google.png'


import Content from './content'
function App() {
  
  const vendors = useState([...Array(3)]);

  return (
    <div className="App">
      <Content/>
      {/* <div className="container">
        <Box boxShadow={1} className="header">
          <span>ADD CRITERIA +</span>
        </Box>
        <Box boxShadow={1} className="content">
          <div style={{ flex: 0.5 }} className="column">
            <div className="logoContainer">
              <div className="logo">
                <i onClick={this.add} class="fa fa-plus-circle" style={{ color: '#bbb', fontSize: '2rem' }} aria-hidden="true"></i>
              </div>
              <div>Add New Vendor</div>
            </div>
            <div className="cell">
              Overall Score
            </div>
            <div className="cell">
              Product Description
            </div>
            <div className="cell">
              <i class="fa fa-angle-right mr-20" aria-hidden="true"></i>
              Funding History
            </div>
            <div className="cell">
              Pricing
            </div>
            <div className="cell">
              Features
            </div>
            <div className="cell">
              Customer Care Studies
            </div>
          </div>
          {vendors.length && vendors.map(_ => <div  style={{ flex: 1/vendors.length }} className="column">
            <div className="logoContainer">
              <div className="logo">
                <img  className="image" src={google} alt="imggoogle"/>
                <p style={{fontSize:"10px",margin:"0px"}}>Drop Box</p>
              </div>
            </div>
            <div className="cell center">
              <CircularProgressWithLabel value={6.1} />
            </div>
            <div className="cell">
              Product Description
            </div>
            <div className="cell">
              Funding History
            </div>
            <div className="cell">
              Pricing
            </div>
            <div className="cell">
              Features
            </div>
            <div className="cell">
              Customer Care Studies
            </div>
          </div>)}
        </Box>
      </div> */}
    </div>
  );
}

export default App;
