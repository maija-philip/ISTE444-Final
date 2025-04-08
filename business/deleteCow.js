async function deleteCow(id) {
    // check all the thingies
    // get from db
  
    if (false) {
      return {error: `Cow with id: ${id} not found`}
    }
    
    return {
      message: `Success, cow with id: ${id} was deleted`
    };
  }
  
  module.exports = {
    deleteCow,
  };
  