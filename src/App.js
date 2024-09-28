import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { createContext, useEffect, useState } from 'react';
import './api/axiosDefaults';
import axios from 'axios';

import styles from './App.module.css';
import NavBar from './components/NavBar';
import LoggedOut from './components/LoggedOut';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';


export const CurrentUserContext = createContext()
export const SetCurrentUserContext = createContext()


function App() {
    const [currentUser, setCurrentUser] = useState(null)

    const handleMount = async () => {
        try {
            const { data } = await axios.get('dj-rest-auth/user/')
            setCurrentUser(data)
        } catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        handleMount()
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
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
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
};

export default App;