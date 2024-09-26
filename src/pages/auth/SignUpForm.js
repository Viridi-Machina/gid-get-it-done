import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/gid-logo.png';
import styles from '../../styles/SignUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';
import appStyles from '../../App.module.css';

import { Form, Button, Image, Col, Row, Container } from 'react-bootstrap';

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container className={`${styles.SignUpRow1} p-4 `}>
            <Link className={styles.Link} to="/signup">
                new user
            </Link>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="text"
                    placeholder="Username"
                    name="username"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Password"
                    name="password1"
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                />
                </Form.Group>

                <Button 
                className={`${btnStyles.Button} ${btnStyles.Wide} ${styles.Button}`} 
                type="submit">
                    Register
                </Button>
            </Form>
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow3}`}>
            <Link className={styles.Link} to="/signin">
                <p>Already have an account?</p>
                <span>sign in</span>
            </Link>
            </Container>
        </Col>
        <Col
            md={6}
            className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
        >
            <Image className={styles.Image} src={logo} />
        </Col>
        </Row>
    );
};

export default SignUpForm;
