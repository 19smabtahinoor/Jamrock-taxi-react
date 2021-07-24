import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { Hompage, Navbar} from './components/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Hompage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
