'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var {{x-singular-capitalize}} = sequelize.define('{{x-table}}', {
    /*
     * Set the table fields that you want for your model
     * Example:
     * username: DataTypes.STRING
     *
     * The "id", "created_at" and "updated_at" fields are automatically added >
     * > unless anything else is specified
     */
  }, {
    classMethods: {
      associate: function(models) {
        /*
         * Define relationships with other models
         * Example:
         * models.user.hasOne(models.project);
         */
      }
    },
  });

  ssaclAttributeRoles({{x-singular-capitalize}});

  return {{x-singular-capitalize}};
};
