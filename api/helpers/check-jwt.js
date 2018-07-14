module.exports = {


  friendlyName: 'Check JWT token for permissions',


  description: '',


  inputs: {

    req: {
      type: 'ref',
      description: 'The current incoming request (req).',
      required: true
    }
  
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success();

  }


};

