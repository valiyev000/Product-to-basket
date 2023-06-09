import { useEffect, useState } from 'react';
import './App.scss'
import ContentApi from './components/ContentApi';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import Basket from './components/Basket';


function App() {

  const [data, setData] = useState()
  const [basketItem, setBasketItem] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products/").then((res) => {
      setData(res.data.products);
    })
  }, [])

  console.log("App render");


  function itemAdder(id) {
    data && data.map((e, i) => {

      if (e.id === id) {
        setBasketItem([e, ...basketItem])

      }
    })
  }

  function basketItemRemove(index) {
    
    setBasketItem(basketItem.filter((e, i) => e.id !== index))
  }




  return (
    <ContentApi.Provider value={{ data, setData, itemAdder, basketItem, basketItemRemove }}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact >
            <HomePage />
          </Route>

          <Route path="/basket" >
            <Basket />
          </Route>

          <Route path="*">
            <ErrorPage />
          </Route>

        </Switch>

      </Router>
    </ContentApi.Provider>
  )
}

export default App
