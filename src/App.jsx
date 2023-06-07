import './App.scss'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact >
          <HomePage />
        </Route>
        <Route path="/basket" >HelloBasket</Route>


      </Switch>

    </Router>
  )
}

export default App
