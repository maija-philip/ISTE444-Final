async function editCow(data) {
    // check all the thingies
    // do the db
  
    if (false) {
      return { error: `Cow with id: ${data.id} could not be found` };
    }
  
    return {
      message: "success, cow updated",
      cow: {
        id: 1,
        name: "Matilda",
        age: 3000,
        evil: true,
        weight: 1100,
        description: "This cow has a 30ft tail and has dementia",
      },
    };
  }
  
  module.exports = {
      editCow,
  };
  