"use strict";

const { v4: uuid } = require("uuid");

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.folder = uuid();
  },
};
