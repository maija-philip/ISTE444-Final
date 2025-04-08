async function getCow(id) {
  // check all the thingies
  // get from db

  if (false) {
    return {error: `Cow with id: ${id} not found`}
  }
  
  return {
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
  getCow,
};
