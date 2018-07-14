module.exports = {

  friendlyName: 'Thing',


  description: 'Thing something.',


  inputs: {
    name: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    userIsIdiot: {
      description: 'Just because',
      responseType: 'unauthorised',
    }
  },


  fn: async function (inputs, exits) {
    sails.log.verbose('This gets logged if you set the right level in sails.config.log');
    return exits.userIsIdiot('Missing `Authorisation` header');
    // return exits.success(inputs.name);
  }


};
