const serverConfig = require("../server.config");

const server = serverConfig.server;
const port = serverConfig.port;
const api = serverConfig.api;

const getPostsPath = "/post/page/";
const getPostPath = "/post/";
const createPostPath = "/post/create";
const deletePostPath = "/post/delete";
const updatePostPath = "/post/update/";

const config = {
  GET_POSTS: `${server}${port}${api}${getPostsPath}`,
  GET_POST: `${server}${port}${api}${getPostPath}`,
  CREATE_POST: `${server}${port}${api}${createPostPath}`,
  DELETE_POST: `${server}${port}${api}${deletePostPath}`,
  UPDATE_POST: `${server}${port}${api}${updatePostPath}`,
};

module.exports = config;
