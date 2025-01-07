import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import styles from "../../styles/SignUpForm.module.css";
import btnStyles from '../../styles/Button.module.css';
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/EpicCreateEditForm.module.css';
import Loader from "../../components/Loader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";

function EpicCreateForm() {
    const [errors, setErrors] = useState({});

    const [epicData, setEpicData] = useState({
        title: "",
        image: "",
    });
    const { title, image } = epicData;

    const imageInput = useRef(null)
    const history = useHistory()

    const handleChange = (event) => {
        setEpicData({
            ...epicData,
            [event.target.name]: event.target.value,
        })
    }

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setEpicData({
                ...epicData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("title", title);
        formData.append("image", imageInput.current.files[0]);
    
        try {
            const { data } = await axiosRequest.post("/epics/", formData);
            history.push(`/epics/${data.id}`);
        } catch (err) {
            console.log(err);
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
        }
    };

    const formFields = (
        <>
            <Form.Group className='mb-3'>
                <Form.Label className='d-none'>Title</Form.Label>
                <Form.Control
                    className={`${styles.Input} ${styles.BorderTop}`}
                    type="text"
                    name="title"
                    placeholder='Choose Title'
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
        
            

            <Form.Group className={`${epicStyles.ImageBox}`}>
                {image ? (
                    <>
                    <figure>
                        <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div className={`${epicStyles.Change}`}>
                        <Form.Label
                        className={`btn`}
                        htmlFor="image-upload"
                        >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Form.Label>
                    </div>
                    </>
                ) : (
                    <Form.Label
                    className={`${epicStyles.IconCenter} d-flex justify-content-center`}
                    htmlFor="image-upload"
                    >
                        <div>
                            <i className="fa-solid fa-upload"></i>
                            <Loader
                                message="Upload image"
                            />
                        </div>
                    </Form.Label>
                )}
                
                <Form.Control
                    className={styles.HideControl}
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                />
            </Form.Group>

            <Button 
                className={`${btnStyles.Wide} ${styles.Button}`} 
                type='submit'
            >
                Add to dashboard +
            </Button>
            <Button
                className={`${btnStyles.Button} ${styles.Button} ${epicStyles.Return}`}
                onClick={() => history.goBack()}
            >
                Return
            </Button>
        </>
    );


  return (
    <Row className={`${styles.Row}`}>
        <Col className='my-auto py-2 p-md-2' md={12}>
            <Container className={`${styles.SignUpRow1} ${epicStyles.Container} p-5 `}>
            <h1 className={styles.Link} to='/'>Create Epic</h1>
            <Form onSubmit={handleSubmit}>
                {formFields}
            </Form>
            </Container>
        </Col>
    </Row>
  );
}

export default EpicCreateForm;