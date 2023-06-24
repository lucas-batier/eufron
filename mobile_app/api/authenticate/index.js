import { base_url } from "..";

export const signin = async ({ username, password }) => {
  return fetch(base_url + `authenticate/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};

export const signup = async ({ firstName, lastName, username, password }) => {
  return fetch(base_url + `authenticate/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password,
    }),
  });
};
