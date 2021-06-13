import './App.css';
import Login from './components/login/';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
      </Switch> 
    </div>
  );
}

export default App;
