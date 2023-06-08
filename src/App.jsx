import './App.scss'
import ContentApi from './components/ContentApi';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


  return (
    <ContentApi.Provider>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact >
            <HomePage />
          </Route>
          <Route path="/basket" >HelloBasket</Route>


        </Switch>

      </Router>
    </ContentApi.Provider>
  )
}

export default App
