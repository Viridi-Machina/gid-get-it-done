import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './api/axiosDefaults';

import styles from './App.module.css';
import NavBar from './components/NavBar';
import LoggedOut from './components/LoggedOut';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';




function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Main}>
                <Switch>
                    <Route exact path='/' render={() => <LoggedOut />} />
                    <Route exact path='/sign-in' render={() =><SignInForm />} />
                    <Route exact path='/new-user' render={() => <SignUpForm />} />
                    <Route render={() => <p>Page not found</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;