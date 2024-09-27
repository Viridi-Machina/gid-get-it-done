import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import { Form, Button, Image, Col, Row, Container, Alert } from 'react-bootstrap';

import logo from '../../assets/gid-logo.png';
import styles from '../../styles/SignUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';



const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    });
    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/');
        } catch(err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
        <Col className='my-auto py-2 p-md-2' md={6}>
            <Container className={`${styles.SignUpRow1} p-4 `}>
            <Link className={styles.Link} to='/signup'>
                new user
            </Link>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label className='d-none'>Username</Form.Label>
                <Form.Control
                    className={`${styles.Input} ${styles.BorderTop}`}
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group className='mb-3' controlId='password1'>
                <Form.Label className='d-none'>Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type='password'
                    placeholder='password'
                    name='password1'
                    value={password1}
                    onChange={handleChange}
                />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password2'>
                <Form.Label className='d-none'>Confirm Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    value={password2}
                    onChange={handleChange}
                />
                </Form.Group>

                <Button 
                    className={`${btnStyles.Wide} ${styles.Button}`} 
                    type='submit'
                >
                    Register
                </Button>
            </Form>
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow3}`}>
            <Link className={styles.Link} to='/signin'>
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
