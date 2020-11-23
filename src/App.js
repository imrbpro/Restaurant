import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import AppLang from './Common/Language.json';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <div className="Header">
          <Navbar dark color="danger">
            <div className="container">
              <NavbarBrand href="">
                {AppLang["App-Name"]}
              </NavbarBrand>
            </div>
            <div className="navbar-right">
              Login
              {/* login work design */}
            </div>
          </Navbar>
        </div>
        <div className="Body"></div>
        <div className="Footer">
          <div className="container">
            <div className="jumbotron transparent">
              <div className="row">
                <div className="col-md-4">
                  <h3 className="footer-heading">{AppLang.ContactUs}</h3>
                </div>
                <div className="col-md-4">
                  <h3 className="footer-heading">{AppLang.ContactUs}</h3>
                </div>
                <div className="col-md-4">
                  <h3 className="footer-heading">{AppLang.ContactUs}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
