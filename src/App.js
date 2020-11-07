import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Group from './components/group';
import Profile from './components/profile';
import Start from './components/start';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Start} exact path='/'/>
        <Route component={Home} path='/home'/>
        <Route component={Group} path='/group'/>
        <Route component={Profile} path='/profile'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
