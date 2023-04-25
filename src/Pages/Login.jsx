import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Features/Reducers/AuthReducers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  changeLoginSuc,
  changeLoginErr,
} from "../Features/Reducers/AuthReducers";
import { useForm } from "react-hook-form";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { username: "donero", password: "ewedon" } });
  const loginSuccess = useSelector(
    (state) => state.rootReducer.loginState.loginSuccess
  );
  const loginError = useSelector(
    (state) => state.rootReducer.loginState.loginError
  );
  const loginLoading = useSelector(
    (state) => state.rootReducer.loginState.isLoading
  );

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        navigate("/");
        dispatch(changeLoginSuc());
      }, 2000);
    }
  }, [loginSuccess]);
  useEffect(() => {
    if (loginError) {
      setTimeout(() => {
        setValue("username", "donero");
        setValue("password", "ewedon");
        dispatch(changeLoginErr());
      }, 2000);
    }
  }, [loginError]);

  return (
    <div className="login-sec">
      <div className="login-card">
        <h2 className="login-card__title">Login</h2>
        <form
          onSubmit={handleSubmit((data) =>
            dispatch(
              loginUser({
                username: getValues("username"),
                password: getValues("password"),
              })
            )
          )}
        >
          <div className="login-card__form">
            <div className="login-card__formcontrol">
              <label htmlFor="username">Username</label>
              <input
                className="login-card__forminput"
                id="username"
                type="text"
                {...register("username", { required: "Username is Required" })}
              />
              {errors?.username && (
                <p className="login-card__error">{errors.username.message}</p>
              )}
            </div>
            <div className="login-card__formcontrol">
              <label htmlFor="password">Password</label>
              <input
                className="login-card__forminput"
                id="password"
                type="password"
                {...register("password", { required: "Password is Required" })}
              />
              {errors?.password && (
                <p className="login-card__error">{errors.password.message}</p>
              )}
            </div>
            {loginLoading && <p>Processing...</p>}
            {loginSuccess && <p className="text-success">Login Successfull</p>}
            {loginError && (
              <p className="text-danger">Oops :( Something went wrong</p>
            )}
            <div className="login-card__actions">
              <button type="submit" className="login-card__submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
