import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Hompage, Navbar, SearchPage, CarsDetailsPage } from './components/index'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route exact path="/car-cart" component={SearchPage} />
        <Route exact path="/car-cart/:id" children={<CarsDetailsPage/>}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
