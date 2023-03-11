'use strict';

/**
 * point-cloud router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::point-cloud.point-cloud');
