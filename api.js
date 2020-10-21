const axios = require("axios");

const api = axios.create({
  baseURL: process.env.SPACEX_API,
});

module.exports = api;
