import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import styles from "../../styles/SignUpForm.module.css";
import btnStyles from '../../styles/Button.module.css';
import epicStyles from '../../styles/Epic.module.css';

const Epic = (props) => {
    const {
        id,
        title,
        image,
        created_by,
        is_creator,
        status,
        created_at,
        updated_at,
        assigned_users,
        assignees,
        assigned_tasks,
        tasks,
        is_completed,
        epicPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === created_by

    return (
        <>
            <div>
                <div className={`${epicStyles.Title}`}>
                    <div className={`${epicStyles.TitleSpan}`}>
                        <h2>{title}</h2>
                        <h2>{is_owner && epicPage && <i className="fa-solid fa-circle-chevron-down"></i>}</h2>
                    </div>
                </div>
                <img className={`${epicStyles.EpicBG}`} src={image} alt='Epic Background Image' />
                <div className={`${epicStyles.Summary}`}>
                    <p className='pt-1'>
                        <i className="fas fa-fw fa-people-group"></i> Assignees:
                        <span> {assigned_users}</span>
                    </p>
                    <p className='pb-1'>
                        <i className="fas fa-fw fa-diagram-project"></i> Tasks:
                        <span> {assigned_tasks}</span>
                    </p>
                </div>
                <div className={`${epicStyles.Details}`}>
                    <h2>Details</h2>
                    <p>Assined Users: {assignees}</p>

                    <p>Tasks list: {tasks}</p>
                    {/* <p>Complete? {is_completed.toString()}</p> */}
                    <p>Created: {created_at}</p>
                    <p>Last Updated: {updated_at}</p>
                </div>
                <div className={`${epicStyles.Summary} ${epicStyles.Summary2}`}>
                    <div>
                        <p>
                            <i className="fas fa-fw fa-chart-line"></i>
                            <span> {status}</span>
                        </p>
                    </div>
                </div>
                <div className={`${epicStyles.Links}`}>
                    <div className={`${epicStyles.Link1}`} >
                        View {assigned_tasks} Tasks
                    </div>
                    <div className={`${epicStyles.a}`} >
                        New Task +
                    </div>
                </div>
            </div>
      </>
    )
}

export default Epic

