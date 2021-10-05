import React, {useState} from "react"

import LulerTanggaApi from "../services/LulerTanggaApi"

function SignUp() {
  const [signUpParams, setSignUpParams] = useState({
    "username": "",
    "email": "",
    "password": "",
    "password_confirmation": ""
  })
  function handleSignUpParamsChanges(e) {
    const { name, value } = e.target
    setSignUpParams(signUpParams => ({...signUpParams, [name]: value}))
  }

  async function submitSignUp() {
    try {
      var response = await LulerTanggaApi.UserRegister(signUpParams)

      if (response.status === 200) {
        alert("Sign up success!")
      } else {
        alert(`There is some error: ${response.body.error}`)
      }
    } catch (e) {
      alert(`There is some error: ${e.message}`)
    }
  }

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
                <p className="login-box-msg">Sign up and enjoy the game</p>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text" style={{width: "200px"}}>Username</div></div>
                  <input type="text" className="form-control" autoComplete="new-password" name="username"
                    value={signUpParams.username}
                    onChange={e => handleSignUpParamsChanges(e)}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text" style={{width: "200px"}}>Email</div></div>
                  <input type="email" className="form-control" autoComplete="new-password" name="email"
                    value={signUpParams.email}
                    onChange={e => handleSignUpParamsChanges(e)}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text" style={{width: "200px"}}>Password</div></div>
                  <input type="password" className="form-control" autoComplete="new-password" name="password"
                    value={signUpParams.password}
                    onChange={e => handleSignUpParamsChanges(e)}
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend"><div className="input-group-text" style={{width: "200px"}}>Password Confirmation</div></div>
                  <input type="password" className="form-control" autoComplete="new-password" name="password_confirmation"
                    value={signUpParams.password_confirmation}
                    onChange={e => handleSignUpParamsChanges(e)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e) => submitSignUp()} >Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp
