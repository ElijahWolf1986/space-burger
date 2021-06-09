class IngredientsApi {
  constructor(url) {
    this._url = url;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.log(res.status);
      return Promise.reject(res);
    }
  }

  _handleResponseError(err) {
    console.log(err);
    return Promise.reject(err);
  }

  getIngredientList() {
    return fetch(`${this._url}/ingredients`)
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  getOrder(ingredients) {
    return fetch(`${this._url}/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredients }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  forgotPassword() {
    return fetch(`${this._url}/password-reset`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  resetPassword(password, code) {
    return fetch(`${this._url}/password-reset`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: `${password}`, code: `${code}` }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  registerUser(email, password, name) {
    return fetch(`${this._url}/auth/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        name: `${name}`,
      }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  loginUser(email, password) {
    return fetch(`${this._url}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
}

export default IngredientsApi;
