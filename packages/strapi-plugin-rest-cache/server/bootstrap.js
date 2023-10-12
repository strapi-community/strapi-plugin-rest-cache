'use strict';

const permissionsActions = require('./permissions-actions');

/**
 * @param {{ strapi: Strapi }} strapi
 */
async function bootstrap({ strapi }) {

  const cacheStore = strapi.plugin('rest-cache').service('cacheStore');
  // watch for changes in any roles -> clear all cache
  // need to be done before lifecycles are registered
  if (strapi.plugin('users-permissions')) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.role'],
      async beforeDelete() {
        await cacheStore.reset();
      },
    });
  }
  // boostrap plugin permissions
  await strapi.admin.services.permission.actionProvider.registerMany(
    permissionsActions.actions
  );
}

module.exports = {
    bootstrap,
};
