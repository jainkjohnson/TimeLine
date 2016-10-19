class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://182.72.164.150:8008';
    const url = `${host}${route}`
    console.log('url', url);
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.status) {
        return json
      }
      return json.then(err => {throw err});
    }).then( json => json.data);
  }
}
export default Api
