import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import logo from '../assets/gid-logo.png';
import Avatar from "./Avatar";
import styles from '../styles/NavBar.module.css';
import { useCurrentUser, useSetCurrentUser, } from '../contexts/CurrentUserContext';
import { removeTokenTimestamp } from "../utils/utils";


const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    
    // Async sign-out function for signout nav-link
    const handleSignOut = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            console.log(err);
        }
    };

    const loggedInNavLinks = (
            <>
                <Container>
                    <NavLink
                        className={styles.Profile}
                        to={`/view-profile/${currentUser?.profile_id}`}
                    >
                        <Avatar
                            src={currentUser?.profile_image}
                            text=''
                            height={100}
                        />
                    </NavLink>
                    <Nav>
                        <NavLink
                            className={`${styles.UserName}`}
                            activeClassName={styles.ActiveProfile}
                            to='/view-profile'
                            >
                            <h2>{currentUser?.username}</h2>
                        </NavLink>
                    </Nav>
                </Container>
                <Container>
                    <Nav>
                        <NavLink 
                            className={`${styles.NavLink} ${styles.NavButton}`}
                            activeClassName={styles.Active}
                            to="/epic-dashboard"
                        >
                            <span><i className='fas fa-fw fa-diagram-successor'></i></span>
                            <h2>Epics</h2>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink 
                            className={`${styles.NavLink} ${styles.NavButton}`}
                            activeClassName={styles.Active}
                            to='/tasks'
                        >
                            <span><i className='fas fa-fw fa-diagram-project'></i></span>
                            <h2>Tasks</h2>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink
                            className={`${styles.NavLink} ${styles.NavButton}`}
                            activeClassName={styles.Active}
                            to='/team'
                            >
                            <span><i className='fas fa-fw fa-people-group'></i></span>
                            <h2>Team</h2>
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavLink
                        className={`${styles.NavLink} ${styles.NavButton}`}
                        to='/' onClick={handleSignOut}
                        >
                            <span><i className='fas fa-fw fa-circle-arrow-right'></i></span>
                            <h2 className={styles.Smaller}>Logout</h2>
                        </NavLink>
                    </Nav>
                </Container>
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
            <div className={styles.Logo}>
                    <Navbar.Brand>
                        <img src={logo} alt='logo' height='110' />
                    </Navbar.Brand>
            </div>
            <Container className={styles.SideBar}>
                {currentUser ? loggedInNavLinks : loggedOutNavLinks}
            </Container>
        </>
    );
};

export default NavBar;