import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/Epics.module.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";

function EpicPage() {
    const { id } = useParams();
    const [epic, setEpic] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: epic }] = await Promise.all([ 
                    axiosRequest.get(`/epics/${id}`)
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
        <Container className={`${styles.SignUpRow1} p-5 `}>
            <h1 className={styles.Link}>Epic</h1>
            <h2>Image</h2>
            <h2>Status</h2>
            <h2>Tasks</h2>
            <h2>Last Updated</h2>
            <h2>Completed?</h2>
        </Container>
    )
};

export default EpicPage