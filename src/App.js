import React from 'react'
import {Redirect, Route, Switch,} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import {Navbar} from './app/Navbar'
import {history} from "./history";
import LandingPage from "./features/Landing/LandingPage";
import {useSelector} from "react-redux";
import Loader from "react-loader-spinner";


function App() {

    const {isLoading} = useSelector(state => state.app);

  return (
      <ConnectedRouter history={history}>
        <Navbar />
          <div className={"searchForm"}>
              <Loader
                  visible={isLoading}
                  type="Puff"
                  color="#00FF00"
                  height={100}
                  width={100}
              />
          </div>
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
