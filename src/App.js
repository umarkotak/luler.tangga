import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

import PageWelcome from "./components/pages/Welcome"
import PageNotFound from "./components/pages/NotFound"

import PageLogin from "./components/pages/Login"
import PageSignUp from "./components/pages/SignUp"

function App() {
  return (
    <Router>
      <div className="layout-fixed control-sidebar-slide-open dark-mode layout-navbar-fixed text-sm layout-footer-fixed" style={{"height": "auto"}}>
        <div className="wrapper">
          <div className="preloader flex-column justify-content-center align-items-center" style={{"height": "0px"}}>
            <img className="animation__shake" src="/logo512.png" alt="AdminLTELogo" height="60" width="60" style={{"display": "none"}} />
          </div>

          <Navbar />

          <Sidebar />

          <div className="content-wrapper" style={{"minHeight": `${window.innerHeight}px`}}>
            <Switch>
              <Route path="/" exact component={PageWelcome} />

              <Route path="/login" exact component={PageLogin} />
              <Route path="/sign_up" exact component={PageSignUp} />

              <Route path="/" component={PageNotFound} />
            </Switch>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App;
