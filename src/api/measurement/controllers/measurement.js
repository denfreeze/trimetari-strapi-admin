'use strict';

/**
 * measurement controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::measurement.measurement', ({strapi}) => ({
  async create(ctx) {
    const { user, point_cloud, data, publishedAt } = ctx.request.body.data
    const userModel = await strapi.query('plugin::users-permissions.user').findOne({ where: { id: user.id }})
    const cloudModel = await strapi.query('api::point-cloud.point-cloud').findOne({ where: { folder: point_cloud.folder }})

    const pointCloud = await strapi.query('api::measurement.measurement').findOne({
      where: { user: { id: user.id }, point_cloud: { id: cloudModel.id } }})

    let response = null;

    if (pointCloud) {
      response = await strapi.entityService.update('api::measurement.measurement', pointCloud.id, {
        data: { data, user: userModel, point_cloud: cloudModel }
      })
    } else {
      response = await strapi.entityService.create('api::measurement.measurement', {
        data: { data, user: userModel, point_cloud: cloudModel, publishedAt }
      })
    }

    return { response }
  }
}));


