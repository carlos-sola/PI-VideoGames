import { Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/detail/:id" exact component={VideogameDetail}/>
    </div>
  );
}

export default App;
