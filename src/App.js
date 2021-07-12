import './App.css';
import {Route,Switch} from 'react-router-dom'
import NavBar from './components/navBar';
import Banner from './components/banner';
import Card from './components/card';
import Context from './components/context';
import TrackHistory from './components/trackHistory';
import RrequestQuote from './components/requestQuote';
import Requsts from './components/requsts';
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Banner />
        </Route>
        <Route path='/services'>
          <Context />
        </Route>
        <Route exact path='/requestQuote'>
          <RrequestQuote />
        </Route>
        <Route path='/about'>
          <Card />
        </Route>
        <Route path='/requsts'>
          <Requsts />
        </Route>
      </Switch>
      
      {/* <Card /> */}
      {/* <Context /> */}
      {/* <TrackHistory /> */}
      {/* <RrequestQuote /> */}
      
    </div>
  );
}

export default App;
