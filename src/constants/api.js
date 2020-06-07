import axios from "axios";

export const api = {
  auth: {
    loginWithEmailPassword(email, password) {
      return axios.post("http://localhost:3000/api/authenticate/login/user", {
        email,
        password,
      });
    },
  },
};
