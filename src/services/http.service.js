class httpService {
  async authResponseSubmit(url, body) {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response);
  }

  async request(url, options) {
    return await fetch(url, options).then((reponse) => reponse);
  }

  async requestData(url, options) {
    return await fetch(url, options).then((reponse) => reponse.json());
  }
}

export default new httpService();
