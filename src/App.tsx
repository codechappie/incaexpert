import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './Modules/about-us/AboutUs';
import Footer from './Modules/commons/footer/Footer';
import Navbar from './Modules/commons/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={AboutUs} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
