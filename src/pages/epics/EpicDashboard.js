import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/EpicPage.module.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";

function EpicDashboard() {
    const { id } = useParams();
    const [epic, setEpic] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: epic }] = await Promise.all([ 
                    axiosRequest.get(`/epics/`)
                ])
                setEpic({ results: [epic] });
                console.log(epic)
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <div className={`${epicStyles.Content}`}>
            <div className={epicStyles.Container}>
                    <div className='my-auto py-2 p-md-2' md={12}>
                        <Container className={`${styles.SignUpRow1} p-5 `}>
                            <h1 className={styles.Link}>Epic</h1>
                            <h2>Image</h2>
                            <h2>Status</h2>
                            <h2>Tasks</h2>
                            <h2>Last Updated</h2>
                            <h2>Completed?</h2>
                        </Container>
                    </div>
            </div>
        </div>
    )
};

export default EpicDashboard