import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/gid-logo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand='md' fixed='top'>
      <Container fluid='xxl'>
        <Navbar.Brand className='m-0'>
          <img src={logo} alt='logo' height='70' />
        </Navbar.Brand>
          <div className={styles.Logo}>
            <h1 className='d-md-1'>GET IT DONE</h1>
          </div>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className={styles.NavButton}>
          <i class="fa-solid fa-caret-down"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto text-start'>
            <Nav.Link>
              <i className='fas fa-fw fa-circle-h'></i>Home
            </Nav.Link>
            <Nav.Link>
              <i className='fas fa-fw fa-circle-user'></i>Sign in
            </Nav.Link>
            <Nav.Link>
              <i className='fas fa-fw fa-circle-plus'></i>New User
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;