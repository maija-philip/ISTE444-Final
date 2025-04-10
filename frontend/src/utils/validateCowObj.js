/**
 * Check to make sure all the fields in the cow obj are filled in
 * @param {Object} cow - object with keys and values
 * @returns String if error, null if no error
 */
export function validateCowObj(cow) {
    let errors = []
    
    // loop through every value in the object
    for ( const[key, value] of Object.entries(cow)) {
      if (typeof value !== 'boolean' && (!value || (typeof value === 'string' && value.trim() === ''))) {
        errors.push(key);
      }
    }

    // check if we found errors
    if (errors.length !== 0) {
      return "Make sure these fields are not empty: " + errors.join(", ")
    }

    return null
}