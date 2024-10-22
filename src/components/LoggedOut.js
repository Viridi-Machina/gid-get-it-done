import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/gid-logo.png";
import styles from "../styles/LoggedOut.module.css";
import SignInForm from "../pages/auth/SignInForm";

import { Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <div>
        <Row className={`${styles.Row} ${styles.FadeOut}`}>
        <Col md={3} className={`my-auto p-0 d-flex justify-content-end`}>
            <Image className={`${styles.ImageLH}`} src={logo} />
        </Col>
        <Col md={6} className={`my-auto p-0 ${styles.Headers}`}>
            <h1 className={`d-flex justify-content-center`}>
            <span className={`${styles.BorderHeader1}`}>GET iT</span>
            <span className={`${styles.BorderHeader1Copy}`}>GET iT</span>
            <span className={`${styles.BorderHeader2}`}>&nbsp;DONE</span>
            </h1>
            <h2 className='d-flex justify-content-center'>
                <span className={`${styles.BorderHeader3}`}>STARTED</span>
            </h2>
        </Col>
        <Col md={3} className={`my-auto p-0 d-flex justify-content-start`}>
            <Image className={`${styles.ImageRH}`} src={logo} />
        </Col>
        </Row>
        <div className={`${styles.SignIn} ${styles.FadeIn}`}><SignInForm/></div>
    </div>
  );
};

export default SignUpForm;
