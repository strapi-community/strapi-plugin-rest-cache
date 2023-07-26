'use strict';

/**
 * @typedef {import('../../types').CacheRouteConfig} CacheRouteConfig
 */

/**
 * Check if a custom route is registered in strapi
 *
 * @param {Strapi} strapi
 * @param {CacheRouteConfig} route
 * @return {boolean}
 */
function routeExists(strapi, route) {
  // check api routes
  const allRoutes = [
    ...strapi.server.listRoutes(),
    ...strapi.server.api('content-api').listRoutes(),
    ...strapi.server.api('admin').listRoutes(),
  ];
  const match = allRoutes.find(
    (routeLayer) =>
      routeLayer.methods.includes(route.method) &&
      routeLayer.path.match(new RegExp(`^${route.path}/?`)) // match with optional leading slash
  );

  return Boolean(match);
}

module.exports = { routeExists };
