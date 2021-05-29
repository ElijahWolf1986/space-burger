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
    return fetch(`${this._url}`)
      .then(this._handleResponse)
      .catch(this._handleResponseError);
  }

  getOrder(ingredients) {
    return fetch(`${this._url}`, {
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
}

export default IngredientsApi;
