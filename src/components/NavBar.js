import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import logo from '../assets/gid-logo.png';
import styles from '../styles/NavBar.module.css';
import { useCurrentUser, useSetCurrentUser, } from '../contexts/CurrentUserContext';
import { removeTokenTimestamp } from "../utils/utils";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const loggedInNavLinks = (
        <>
            {currentUser?.username}
        </>
    );

    // Async sign-out function for signout nav-link
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err);
        }
    };

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
                    <i className="fa-solid fa-caret-down"></i>
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
                        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                            <i className="fas fa-sign-out-alt"></i>Sign out
                        </NavLink>
                        {currentUser ? loggedInNavLinks : loggedOutNavLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;