import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import pages and components
import Home from './pages/Home';
import Search from './pages/Search';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
          {/*  TO DO
          <Route path='*'>
            <Error />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
