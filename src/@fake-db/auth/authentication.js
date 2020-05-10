import mock from "../mock";
import jwt from "jsonwebtoken";

let users = [
  {
    id: 1,
    email: "vaqif14@gmail.com",
    password: "123",
    name: "Vaqif",
  },
];

const jwtConfig = {
  secret: "dd5f3089-40c3-403d-af14-d0c228b05cb4",
  expireTime: 8000,
};

mock
  .onPost("http://localhost:3000/api/authenticate/login/user")
  .reply((request) => {
    let { email, password } = JSON.parse(request.data);
    let error = "Something went wrong";

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      try {
        const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, {
          expiresIn: jwtConfig.expireTime,
        });

        const userData = Object.assign({}, user, { loggedInWith: "jwt" });

        delete userData.password;

        const response = {
          user: userData,
          accessToken: accessToken,
        };

        return [200, response];
      } catch (e) {
        error = e;
      }
    } else {
      error = "Email Or Password Invalid";
    }
    return [200, { error }];
  });
