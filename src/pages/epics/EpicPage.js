import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/EpicPage.module.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";
import Epic from "./Epic";

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
        <Container className={`${styles.SignUpRow1} ${epicStyles.NoPadding} ${epicStyles.Center}`}>
            <Epic {...epic.results[0]} epicPage/>
        </Container>
    )
};

export default EpicPage