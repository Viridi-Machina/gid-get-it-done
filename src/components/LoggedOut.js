import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/gid-logo.png";
import styles from "../styles/LoggedOut.module.css";

import { Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
            <Container className={`${styles.SignUpRow1} p-4 `}>
            <Link className={styles.Link} to='/signin'>sign in</Link>
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow3}`}>
                <Link className={styles.Link} to="/signup">
                <p>Don't have an account yet?</p>
                <span>get started now</span>
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
