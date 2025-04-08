async function createCow(data) {
  // check all the thingies
  // do the db

  if (false) {
    return { error: `Server Error, could not add cow, sorry` };
  }

  return {
    message: "success, cow created",
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
    createCow,
};
