import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Home from './components/home/Home'
import About from './components/about/about'
import MdFromUrl from './components/markdown/markdownUrl'

/* TODO: design a profession Router component to control app router and routing animations  <04-10-20, David Chen> */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
						<Route path="/markdown">
							<MdFromUrl url="/markdown/test.md"/>
							</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')!
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
