import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import epicStyles from '../../styles/EpicPage.module.css';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRequest } from "../../api/axiosDefaults";
import EpicPage from "./EpicPage";

function EpicDashboard() {
    return (
        <div className={`${epicStyles.Content}`}>
            <div className={epicStyles.Container}>
                    <div className='my-auto py-2 p-md-2' md={12}>
                        <EpicPage />
                    </div>
            </div>
        </div>
    )
};

export default EpicDashboard