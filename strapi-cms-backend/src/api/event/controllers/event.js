"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.db.query("api::event.event").findOne({
      where: { slug: id },
      populate: {
        IntroBanner: {
          fields: ["name", "url", "alternativeText"],
        },
        CtaImage: {
          fields: ["name", "url", "alternativeText"],
        },
        TextImage: {
          populate: {
            HeroImage: {
              fields: ["name", "url", "alternativeText"],
            },
          },
        },
        Faq: {
          Faqs: {},
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
