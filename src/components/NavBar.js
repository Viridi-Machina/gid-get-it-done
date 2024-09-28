import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../App';
import logo from '../assets/gid-logo.png';
import styles from '../styles/NavBar.module.css';


const NavBar = () => {
const currentUser = useContext(CurrentUserContext)
const loggedInNavLinks = (
    <>
        {currentUser?.username}
    </>
);
const loggedOutNavLinks = (
    <>
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to='/sign-in'
        >
            <i className='fas fa-fw fa-circle-user'></i>Sign in
        </NavLink>
        <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to='/new-user'
        >
            <i className='fas fa-fw fa-circle-plus'></i>New User
        </NavLink>
    </>
);

return (
    <Navbar className={styles.NavBar} expand='sm' fixed='top'>
        <Container fluid='xxl'>
            <NavLink to='/'>
                <Navbar.Brand className='m-0'>
                    <img src={logo} alt='logo' height='70' />
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className={styles.NavButton}>
                <i class="fa-solid fa-caret-down"></i>
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='m-auto text-start'>
                    <NavLink
                        exact
                        className={styles.NavLink} 
                        activeClassName={styles.Active} 
                        to='/'
                    >
                        <i className='fas fa-fw fa-circle-h'></i>Home
                    </NavLink>
                    {currentUser ? loggedInNavLinks : loggedOutNavLinks}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
};

export default NavBar;