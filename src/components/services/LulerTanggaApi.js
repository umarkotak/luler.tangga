class LulerTanggaApi {
  constructor() {
    if (window.location.protocol === "https:") {
      this.LulerTanggaApiHost = "https://luler-tangga-be.herokuapp.com"
    } else {
      this.LulerTanggaApiHost = "http://localhost:7000"
    }
  }

  async UserRegister(requestBody) {
    return this.BaseHttpCall(
      "POST",
      `${this.LulerTanggaApiHost}/users/register`,
      {},
      {},
      requestBody
    )
  }

  async UserLogin(requestBody) {
    return this.BaseHttpCall(
      "POST",
      `${this.LulerTanggaApiHost}/users/login`,
      {},
      {},
      requestBody
    )
  }

  async BaseHttpCall(method, url, headers, requestQuery, requestBody) {
    var uri = new URL(url)
    uri.search = new URLSearchParams(requestQuery).toString()
    headers['Content-Type'] = 'application/json'

    console.log(`${method} ${uri} REQUEST`, requestBody)
    const response = await fetch(uri, {
      method: method,
      headers: headers,
      body: JSON.stringify(requestBody)
    })
    var body = response.json()
    console.log(`${method} ${uri} RESPONSE`, body)

    return { status: response.status, body: body }
  }
}

const lulerTanggaApi = new LulerTanggaApi()

export default lulerTanggaApi
