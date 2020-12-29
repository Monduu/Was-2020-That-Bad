import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article1 from './Views/Article1';
import Guestbook from './Views/Guestbook';
import Register from './Views/Register';
import AboutUs from './Views/AboutUs';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/article1">
              <Article1 />
            </Route>
            <Route path="/guestbook">
              <Guestbook />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>

          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
