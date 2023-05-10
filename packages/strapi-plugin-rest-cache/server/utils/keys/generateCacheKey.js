'use strict';

const { generateHeadersKey } = require('./generateHeadersKey');
const { generateQueryParamsKey } = require('./generateQueryParamsKey');

function generateCacheKey(
  ctx,
  keys = {
    useQueryParams: false, // @todo: array or boolean => can be optimized
    useHeaders: [],
  }
) {
  let querySuffix = '';
  let headersSuffix = '';

  if (keys.useQueryParams !== false) {
    querySuffix = generateQueryParamsKey(ctx, keys.useQueryParams);
  }

  if (keys.useHeaders.length > 0) {
    headersSuffix = generateHeadersKey(ctx, keys.useHeaders);
  }

  // standardize url paths by removing trailing slashes
  const requestPath = ctx.request.path.replace(/\/$/, '');

  return `${requestPath}?${querySuffix}&${headersSuffix}`;
}

module.exports = { generateCacheKey };
