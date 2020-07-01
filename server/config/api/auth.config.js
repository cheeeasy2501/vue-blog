const serverConfig = require("../server.config");

const server = serverConfig.server;
const port = serverConfig.port;
const api = serverConfig.api;

const registerPath = "/register";
const loginPath = "/login";
const checkedTokenPath = "/token";

const config = {
  REGISTER: `${server}:${port}${api}${registerPath}`,
  LOGIN: `${server}:${port}${api}${loginPath}`,
  TOKEN: `${server}:${port}${api}${checkedTokenPath}`,
};

module.exports = config;
