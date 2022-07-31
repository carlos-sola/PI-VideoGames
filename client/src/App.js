import { Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';
import Create from './components/Create/Create';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={LandingPage}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/detail/:id" exact component={VideogameDetail}/>
      <Route path="/home/create" exact component={Create}/>
    </div>
  );
}

export default App;
