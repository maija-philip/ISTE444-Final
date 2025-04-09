const server = "http://localhost:8080/api";

/**
 * return the data received form the api specified
 *
 * @param {string} endpoint - the part of api you wish to access, ex: 'user/'
 * @return api data
 */
export async function getAPIData(endpoint, method, payload) {
  let details = {
    method: method,
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": 'application/json',
    },
  };
  if (method !== API_METHODS.get) {
    details["body"] = JSON.stringify(payload);
  }

  let link = `${server}${endpoint}`;
  // console.log("LINK", link)

  return fetch(link, details)
    .then((res) => res.json())
    .catch((err) => {
      console.log("err:", err);
    });
}

export const API_METHODS = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE"
};
