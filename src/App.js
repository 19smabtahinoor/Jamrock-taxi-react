import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Hompage, Navbar, SearchPage } from './components/index'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hompage} />
        <Route exact path="/car-cart" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
