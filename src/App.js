import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component={HomePage}/>
      <Route exact path = "/about" component={AboutPage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
