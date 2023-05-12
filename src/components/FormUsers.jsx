import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValue from "../utils/defaultValue";
import "./styles/formUser.css";

const FormUsers = ({
  createUsers,
  updateInfo,
  updateUsers,
  setUpdateInfo,
  setformClose,
  formClose,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUsers(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createUsers(data);
    }
    reset(defaultValue);
  };

  const handleExit = () => {
    setformClose(true);
  };

  return (
    <div className={`container__form ${formClose ? "close" : ""}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <h2 className="form__title">
          {updateInfo ? "Update User Information" : "Create New User"}
        </h2>
        <span onClick={handleExit} className="form__exit">
          X
        </span>
        <div className="form__item">
          <label className="form__label" htmlFor="email">
            Email:{" "}
          </label>

          <input
            className="form__input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="password">
            Password:{" "}
          </label>

          <input
            className="form__input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="first_name">
            First Name:{" "}
          </label>

          <input
            className="form__input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="last_name">
            Last Name:{" "}
          </label>

          <input
            className="form__input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>

        <div className="form__item">
          <label className="form__label" htmlFor="birthday">
            Birthday:{" "}
          </label>

          <input
            className="form__input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>

        <button onClick={handleExit} className="form__btn">
          {updateInfo ? "Update" : "Create"}
        </button>
      </form>{" "}
    </div>
  );
};

export default FormUsers;
