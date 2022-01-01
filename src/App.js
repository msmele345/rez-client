import React from 'react'
import {Redirect, Route, Switch,} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {Navbar} from './app/Navbar'
import {history} from "./history";
import LandingPage from "./features/Landing/LandingPage";


function App() {
  return (
      <ConnectedRouter history={history}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </ConnectedRouter>
  )
}

export default App
