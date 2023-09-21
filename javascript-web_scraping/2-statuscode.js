#!/usr/bin/node
/* eslint-disable */
const axios = require('axios');

axios.get(process.argv[2])
  .then((response) => {
    console.log(`code: ${response.status}`);
  })
  .catch((error) => {
    console.error(error.message);
  });