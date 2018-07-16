module.exports = {


  friendlyName: 'New action',


  description: '',


  inputs: {

  },


  exits: {
    userIsIdiot: {
      description: 'Really dumb user',
      responseType: 'unauthorised'
    }
    
  },


  fn: async function (inputs, exits) {
    if (day ==  'Monday') {
      return exits.userIsIdiot('Really stupid')
    }
    return exits.success()
  }


};
