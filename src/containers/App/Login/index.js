import React, { memo } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useForm } from "react-hook-form";
import { injectIntl } from "react-intl";
import { useInjectReducer } from "utils/injectReducer";
import { createStructuredSelector } from "reselect";
import { useInjectSaga } from "utils/injectSaga";
import IntlMessages from "utils/IntlMessages";
import saga from "./saga";
const reducer = require("./redux").reducer;

const key = "app/login";

function Login({ dispatch, intl }) {
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
        <p className="text-center">
          <IntlMessages id="login" />
        </p>
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder={intl.formatMessage({ id: "login.email" })}
            ref={register}
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder={intl.formatMessage({ id: "login.password" })}
            ref={register}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary ">
            <IntlMessages id="login.submit" />
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

export default compose(withConnect, memo, injectIntl)(Login);
