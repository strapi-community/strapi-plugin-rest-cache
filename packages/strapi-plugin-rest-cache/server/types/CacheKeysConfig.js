'use strict';

class CacheKeysConfig {
  /**
   * @type {string[]}
   */
  useHeaders = [];

  /**
   * @type {Boolean|string[]}
   */
  useQueryParams = true;

  constructor(options) {
    if (!options) return;

    const { useHeaders = [], useQueryParams = true } = options;
    this.useHeaders = useHeaders;
    this.useQueryParams = useQueryParams;
  }
}

module.exports = { CacheKeysConfig };