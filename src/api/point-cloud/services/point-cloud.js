'use strict';

/**
 * point-cloud service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::point-cloud.point-cloud');
