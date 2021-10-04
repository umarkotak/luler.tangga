import React from "react"

import LulerTanggaApi from "../services/LulerTanggaApi"

function SignUp() {
  return (
    <div>
      <div class="content-header">
        <div class="container-fluid">
        </div>
      </div>

      <section class="content">
        <div class="container-fluid">
          <div class="container">
            <div class="card card-outline card-primary">
              <div class="card-header text-center">
                <h1><b>Luler</b>Tangga</h1>
              </div>
              <div class="card-body">
                <p class="login-box-msg">Sign in to start your session</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend"><div class="input-group-text">Username</div></div>
                  <input type="text" class="form-control" autoComplete="new-password" />
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend"><div class="input-group-text">Password</div></div>
                  <input type="password" class="form-control" autoComplete="new-password" />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
