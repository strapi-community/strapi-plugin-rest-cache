"use strict";

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b46375d2efd1c69d8efcdcb46d3acd67"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "changeme"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", "changeme"),
    },
  },
});
