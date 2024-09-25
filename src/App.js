import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={()=> <h1>GET IT DONE</h1>} />
          <Route exact path='/sign-in' render={()=> <h1>Sign In</h1>} />
          <Route exact path='/new-user' render={()=> <h1>New User</h1>} />
          <Route render={()=> <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;