class httpServices {
  async authResponseSubmit(url, body) {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response);
  }
}

export default new httpServices();
