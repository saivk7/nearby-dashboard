import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';      

import './styles.css';

const Header = () =>{

    return (
        <React.Fragment>

            <Navbar dark>
            <div className="container">
                <NavbarBrand href="/">Nearby</NavbarBrand>
            </div>
            </Navbar>

            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Know what's happeing around you with Nearby!</h1>
                        <p>Search for the city you live in and look at the popular events! </p>
                    </div>
                </div>
            </div>
            </Jumbotron>
            </React.Fragment>
        
    );


}

export default Header;
        