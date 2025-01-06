import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUpForm.module.css";
import btnStyles from '../../styles/Button.module.css';
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/EpicCreateEditForm.module.css';
import Loader from "../../components/Loader";

function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className={``}>
      {/* Add your form fields here */}

    
    
      <Button
        className={``}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={``} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Row className={styles.Row}>
        <Col className='my-auto py-2 p-md-2' md={12}>
            <Container className={`${styles.SignUpRow1} p-5 `}>
            <h1 className={styles.Link} to='/'>Create Epic</h1>
            <Form>
                <Form.Group className='mb-3' controlId=''>
                    <Form.Label className='d-none'>title</Form.Label>
                    <Form.Control
                        className={`${styles.Input} ${styles.BorderTop}`}
                        type='text'
                        placeholder='Title'
                    />
                </Form.Group>

                <Form.Group className={`${epicStyles.ImageBox}`}>
                    <Form.Label
                    className={`${epicStyles.IconCenter} d-flex justify-content-center`}
                    htmlFor="image-upload"
                    >
                        <div>
                            <i class="fa-solid fa-upload"></i>
                            <Loader
                                message="Upload image"
                            />
                        </div>
                    </Form.Label>
                </Form.Group>

                <Button 
                    className={`${btnStyles.Wide} ${styles.Button}`} 
                    type='submit'
                >
                    Add to dashboard +
                </Button>
            </Form>
            </Container>
        </Col>
    </Row>
    // <Form>
    //   <Row className={``}>
    //     <Col className={`${styles.FormRow} ${styles.Container}`} md={7} lg={8}>
    //       <Container className=''>
    //         <Form.Group className={``}>

    //             <Form.Label
    //               className={`d-flex justify-content-center`}
    //               htmlFor="image-upload"
    //             >
    //                 <i class="fa-solid fa-upload"></i>
    //             </Form.Label>

    //         </Form.Group>
    //         <div className="d-md-none">{textFields}</div>
    //       </Container>
    //     </Col>

    //     <Col md={5} lg={4} className={`${styles.FormRow}`}>
    //       <Container className={appStyles.Content}>{textFields}</Container>
    //     </Col>
    //   </Row>
    // </Form>
  );
}

export default PostCreateForm;