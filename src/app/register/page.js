"use client";
import { Button, Col, Container, Row, label } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function page() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <Container className="col-md-4 mt-4 ">
      <h1 className="text-primary">Signup</h1>
      <p>Create an Account</p>

      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control my-4"
            id="exampleInputtext1"
            aria-describedby="emailHelp"
            placeholder="First Name"
            {...register("firstName")}
          />
          <input
            type="text"
            className="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Last Name"
            {...register("lastName")}
          />

          <input
            type="email"
            className="form-control my-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
            {...register("email")}
          />
        </div>

        <input
          type="password"
          className="form-control my-4"
          id="exampleInputPassword1"
          placeholder="Enter Password"
          {...register("password")}
        />
        <input
          type="password"
          className="form-control my-4"
          id="exampleInputPassword1"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />

        <input
          type="date"
          className="form-control my-4"
          id="exampleInputPassword1"
          placeholder="Confirm Password"
          {...register("date")}
        />

        <div className="row mb-4 col-md-12">
          <div class="form-check col-md-4">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value="male"
              {...register("gender")}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male{" "}
            </label>
          </div>
          <div class="form-check col-md-4">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value="female"
              {...register("gender")}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>

          <div class="form-check col-md-4">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault3"
              value="others"
              {...register("gender")}
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Others
            </label>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label" for="exampleCheck1">
            Terms and Conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>{data}</p>
      </form>
    </Container>
  );
}
