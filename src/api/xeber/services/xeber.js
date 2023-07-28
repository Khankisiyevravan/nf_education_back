'use strict';

/**
 * xeber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::xeber.xeber');
