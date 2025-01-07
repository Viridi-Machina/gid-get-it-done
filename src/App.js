import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './api/axiosDefaults';

import styles from './App.module.css';
import NavBar from './components/NavBar';
import LoggedOut from './components/LoggedOut';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import EpicCreateForm from './pages/epics/EpicCreateForm';
import EpicDashboard from './pages/epics/EpicDashboard';
import Epic from './pages/epics/EpicPage';
import { useCurrentUser } from './contexts/CurrentUserContext';

function App() {

    const currentUser = useCurrentUser();
    const loggedInDisplay = <NavBar />;

    return (
        <div className={styles.App}>
            {currentUser ? loggedInDisplay : <></> }
            <Container className={styles.Main}>
                <Switch>
                    <Route exact path='/' render={() => <LoggedOut />} />
                    <Route exact path='/epic/:id' render={() => <Epic />} />
                    <Route exact path='/epic-dashboard' render={() => <EpicDashboard />} />
                    <Route exact path='/epic-dashboard/create' render={() => <EpicCreateForm />} />
                    <Route exact path='/tasks' render={() => <p>Tasks</p>} />
                    <Route exact path='/team' render={() => <p>Team</p>} />
                    <Route exact path='/view-profile' render={() => <p>Profile</p>} />
                    <Route exact path='/sign-in' render={() =><SignInForm />} />
                    <Route exact path='/new-user' render={() => <SignUpForm />} />
                    <Route render={() => <p>Page not found</p>} />
                </Switch>
            </Container>
        </div>
    );
};

export default App;