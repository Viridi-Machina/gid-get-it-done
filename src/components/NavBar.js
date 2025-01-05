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

    const loggedInNavLinks = (
            <>
                <Nav>
                    <NavLink className={styles.NavLink} to='/view-profile'>
                        <i className="fas fa-fw fa-circle-user"></i>{currentUser?.username}
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className={styles.NavLink} to="/epic-dashboard">
                        <i className="fas fa-fw fa-diagram-successor"></i>Epics
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className={styles.NavLink} to="/tasks">
                        <i className="fas fa-fw fa-diagram-project"></i>Tasks
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className={styles.NavLink} to="/team">
                        <i className="fas fa-fw fa-people-group"></i>Team
                    </NavLink>
                </Nav>
                <Nav>
                    <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                        <i className="fas fa-fw fa-circle-arrow-right"></i>Sign out
                    </NavLink>
                </Nav>
            </>
        );

    const loggedOutNavLinks = (
        <>
            <Nav>
                <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to='/sign-in'
                >
                    <i className='fas fa-fw fa-circle-user'></i>Sign in
                </NavLink>
            </Nav>
            <Nav>
                <NavLink 
                    className={styles.NavLink} 
                    activeClassName={styles.Active} 
                    to='/new-user'
                >
                    <i className='fas fa-fw fa-circle-plus'></i>New User
                </NavLink>
            </Nav>
        </>
    );

    return (
        <>
            <Container className={styles.SideBar}>
                <Nav className={styles.Logo}>
                    <NavLink to='/epic-dashboard'>
                        <Navbar.Brand>
                            <img src={logo} alt='logo' height='100' />
                        </Navbar.Brand>
                    </NavLink>
                </Nav>
                {currentUser ? loggedInNavLinks : loggedOutNavLinks}
            </Container>
        </>
    );
};

export default NavBar;