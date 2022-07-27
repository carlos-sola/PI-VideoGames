import { Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
    </div>
  );
}

export default App;
