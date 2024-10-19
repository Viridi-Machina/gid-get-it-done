import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form, Button, Col, Row, Container, Alert } from 'react-bootstrap';

import styles from '../../styles/SignUpForm.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignUpData] = useState({
        username: '',
        password: '',

    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signInData,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post('dj-rest-auth/login/', signInData);
            setCurrentUser(data.user)
            history.push('/');
        } catch(err) {
            setErrors(err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
        <Col className='my-auto py-2 p-md-2' md={12}>
            <Container className={`${styles.SignUpRow1} p-5 `}>
            <h1 className={styles.Link} to='/signup'>sign in</h1>
            <Form onSubmit={handleSubmit}>
                {errors.username?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                ))}
                {errors.password?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                ))}
                {errors.non_field_errors?.map((message, idx) => (
                    <Alert variant='warning' key={idx}>
                        {message}
                    </Alert>
                ))}
                <Form.Group className='mb-3' controlId='username'>
                <Form.Label className='d-none'>username</Form.Label>
                <Form.Control
                    className={`${styles.Input} ${styles.BorderTop}`}
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                <Form.Label className='d-none'>Password</Form.Label>
                <Form.Control
                    className={styles.Input}
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                </Form.Group>

                <Button 
                    className={`${btnStyles.Wide} ${styles.Button}`} 
                    type='submit'
                >
                    sign in
                </Button>
            </Form>
            </Container>
            <Container className={`mt-3 ${styles.SignUpRow3}`}>
            <Link className={styles.Link} to='/signin'>
                <p>Don't have an account?</p>
                <span>register now</span>
            </Link>
            </Container>
        </Col>
        </Row>
    );
};

export default SignInForm;
