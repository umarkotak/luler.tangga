class LulerTanggaApi {
  constructor() {
    if (window.location.protocol === "https:") {
      this.LulerTanggaApiHost = "https://luler-tangga-be.herokuapp.com"
    } else {
      this.LulerTanggaApiHost = "http://localhost:7000"
    }
  }

  async UserRegister(requestBody) {
    return this.baseHttpCall(
      "POST",
      `${this.LulerTanggaApiHost}/users/register`,
      null,
      null,
      requestBody
    )
  }

  async baseHttpCall(method, url, headers, requestQuery, requestBody) {
    url.search = new URLSearchParams(requestQuery).toString()
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(requestBody)
    })
    console.log(`${method} ${url} RESULT: ${response.json}`)
    return response
  }
}
