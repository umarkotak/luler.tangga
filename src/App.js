import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import PageWelcome from "./pages/Welcome"

function App() {
  return (
    <Router>
      <body class="layout-fixed control-sidebar-slide-open dark-mode layout-navbar-fixed text-sm layout-footer-fixed" style={{"height": "auto"}}>
        <div class="wrapper">
          <div class="preloader flex-column justify-content-center align-items-center" style={{"height": "0px"}}>
            <img class="animation__shake" src="/logo512.png" alt="AdminLTELogo" height="60" width="60" style={{"display": "none"}} />
          </div>

          <Navbar />

          <Sidebar />

          <div class="content-wrapper" style={{"minHeight": "914px"}}>
            <Switch>
              <Route path="/" exact component={PageWelcome} />
            </Switch>
          </div>

          <Footer />
        </div>
      </body>
    </Router>
  )
}

export default App;
