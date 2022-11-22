import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <>
            <div className='bg-light'>
                <div className='container'>
                    <Navbar bg='light' expand='lg'>
                        <Navbar.Brand href='/'>Crypto Tracker</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse
                            id='basic-navbar-nav'
                            className='justify-content-end'
                        >
                            <Nav className=''>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='/products'>Products</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
            <h1 className='my-3'>Crypto Tracker</h1>
            <p>Get all the info regarding your favourite crypto currency</p>
        </>
    );
};

export default Header;
