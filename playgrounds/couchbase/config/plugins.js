"use strict";

module.exports = ({ env }) => ({
  "rest-cache": {
    enabled: env.bool("ENABLE_CACHE", true),
    config: {
      provider: {
        name: "couchbase",
        max: 32767,
        options: {
          connectionString: "couchbase://127.0.0.1:8091",
          connectionOptions: {
            username: "Administrator",
            password: "Administrator",
          },
          bucket: "testbucket",
          ttl: 2,
        },
      },

      // loads shared config (from /shared folder)
      strategy: require("./cache-strategy")({ env }),
    },
  },
  "users-permissions": {
    jwtSecret: env("JWT_SECRET", "b46375d2efd1c69d8efcdcb46d3acd67a"),
  },
});
