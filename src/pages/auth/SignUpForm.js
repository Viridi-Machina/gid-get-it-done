import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/gid-logo.png";
import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container className={`${styles.SignUpRow1} p-4 `}>
            <Link className={styles.Link} to='/signup'>sign up</Link>

            {/* add your form here */}
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow2}`}>
                <p>Already have an account?</p>
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow3}`}>
                <Link className={styles.Link} to="/signin">
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
