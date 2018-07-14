module.exports = {


  friendlyName: 'Public titles',


  description: 'List out just the titles or slugs for all publicly-visible InstanceConfigs',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const all = await InstanceConfig.find() 
    // Filter for public visibility
    const slugs = all.map(i => i.slug)
    return exits.success(slugs);
  }


};
