"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "react-bootstrap";
import { SignUpSchema } from "./type";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  const [data, setData] = useState("");

  const onSubmit = (formData) => setData(JSON.stringify(formData));

  return (
    <Container className="col-md-4 mt-4">
      <h1
        className=""
        style={{
          color: "rgba(109, 193, 210, 1)",
        }}
      >
        Signup
      </h1>
      <p>Create an Account</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control my-4 ${
              errors.firstName ? "is-invalid" : ""
            }`}
            placeholder="First Name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName.message}</div>
          )}

          <input
            type="text"
            className={`form-control my-4 ${
              errors.lastName ? "is-invalid" : ""
            }`}
            placeholder="Last Name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName.message}</div>
          )}

          <input
            type="email"
            className={`form-control my-4 ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email Address"
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <input
          type="password"
          className={`form-control my-4 ${errors.password ? "is-invalid" : ""}`}
          placeholder="Enter Password"
          {...register("password")}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}

        <input
          type="password"
          className={`form-control my-4 ${
            errors.confirmPassword ? "is-invalid" : ""
          }`}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className="invalid-feedback">
            {errors.confirmPassword.message}
          </div>
        )}

        <input
          type="date"
          className={`form-control my-4 ${errors.date ? "is-invalid" : ""}`}
          {...register("date")}
        />
        {errors.date && (
          <div className="invalid-feedback">{errors.date.message}</div>
        )}

        <div className="row mb-4 col-md-12">
          <div className="form-check col-md-4">
            <input
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              value="male"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check col-md-4">
            <input
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              value="female"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>
          <div className="form-check col-md-4">
            <input
              className={`form-check-input ${
                errors.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              value="others"
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Others
            </label>
          </div>
        </div>
        {errors.gender && (
          <div className="invalid-feedback d-block">
            {errors.gender.message}
          </div>
        )}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            By clicking SignUp, you agree to our Terms, Privacy Policy and
            Cookies Policy.
          </label>
        </div>

        <button
          type="submit"
          className="btn col-md-6 py-3 my-4"
          style={{
            backgroundColor: "rgba(109, 193, 210, 1)",
            color: "#fff",
            marginLeft: "5rem",
          }}
        >
          Sign Up
        </button>
        <p>{data}</p>
      </form>
    </Container>
  );
}
