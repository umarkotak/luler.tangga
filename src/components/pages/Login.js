import React from "react"

function Login() {
  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="container">
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <h1><b>Luler</b>Tangga</h1>
              </div>
              <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text">Username</div></div>
                  <input type="text" className="form-control" autoComplete="new-password" />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text">Password</div></div>
                  <input type="password" className="form-control" autoComplete="new-password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
