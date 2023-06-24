import { base_url } from "..";

export const resetPasswordRequestToken = async ({ email }) => {
  return fetch(base_url + `authenticate/password_reset/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
};

export const resetPasswordValidateToken = async ({ token }) => {
  return fetch(base_url + `authenticate/password_reset/validate_token/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  });
};

export const resetPasswordConfirmReset = async ({ token, password }) => {
  return fetch(base_url + `authenticate/password_reset/confirm/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        token: token,
        password: password,
    }),
  });
};
