module.exports = {

  friendlyName: 'Public titles',

  description: 'List out just the titles or slugs for all publicly-visible InstanceConfigs',

  inputs: {
    name: {
      type: 'string',
      required: false,
    }
  },

  exits: {
    just401: {
      responseType: 'unauthorised',
      description: 'Great place to explain what and why'
    }
  },

  fn: async function (inputs, exits) {
    sails.log.verbose('this')
    const all = await InstanceConfig.find() 
    // Filter for public visibility
    const slugs = all.map(i => i.slug)
    return exits.success(slugs);
  }


};
