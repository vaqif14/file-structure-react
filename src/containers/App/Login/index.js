import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import { useInjectReducer } from "utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { useInjectSaga } from "utils/injectSaga";
import saga from "./saga";
const reducer = require("./redux").reducer;

const key = "app/login";

function Login({ dispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch({
      type: "LOGIN_REQUEST",
      username: data.email,
      password: data.password,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center">Login</p>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            ref={register}
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            ref={register}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return { dispatch };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Login);
