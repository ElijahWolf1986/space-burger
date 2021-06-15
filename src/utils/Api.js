import { getCookie } from "./func";

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

  forgotPassword(email) {
    return fetch(`${this._url}/password-reset`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: `${email}` }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  resetPassword(password, code) {
    return fetch(`${this._url}/password-reset/reset`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: `${password}`, token: `${code}` }),
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

  logout(refreshToken) {
    return fetch(`${this._url}/auth/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: `${refreshToken}`,
      }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
  refreshToken(refreshToken) {
    return fetch(`${this._url}/auth/token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: `${refreshToken}`,
      }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
  getUserInfo() {
    return fetch(`${this._url}/auth/user`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
  updateUserInfo(token, name, email) {
    return fetch(`${this._url}/auth/user`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        email: `${name}`,
        password: `${email}`,
      }),
    })
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }
}

export default IngredientsApi;
