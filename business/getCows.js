async function getCows() {
  // check all the thingies
  // get from db

  return {
    cows: [
      {
        id: 1,
        name: "Matilda",
        age: 3000,
        evil: false,
        weight: 1100,
        description: "This cow has a 30ft tail and has dementia",
      },
      {
        id: 2,
        name: "Evil Matilda",
        age: 3000,
        evil: true,
        weight: 1100,
        description: "This cow has a 0ft tail and has the best memory ever",
      },
    ],
  };
}

module.exports = {
  getCows,
};
