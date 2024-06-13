"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "react-bootstrap";
import me from "../../images/image.png";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import Image from "next/image";
import { loginSchema } from "../register/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [data, setData] = useState("");

  const onSubmit = (formData) => setData(JSON.stringify(formData));

  return (
    <Container
      className="col-md-4 mt-4"
      style={{
        paddingTop: "5rem",
        backgroundColor: "#fff",
      }}
    >
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Image
        src={me}
        alt="Picture of the author"
        style={{
          width: "8rem",
          height: "10rem",
          marginLeft: "12rem",
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="email"
            className={`form-control my-4 ${
              errors.firstName ? "is-invalid" : ""
            }`}
            placeholder="Email"
            {...register("email")}
            style={{
              width: "50%",
              marginLeft: "25%",
            }}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}

          <input
            type="password"
            className={`form-control my-4 ${
              errors.password ? "is-invalid" : ""
            }`}
            placeholder="Enter Password"
            {...register("password")}
            style={{
              width: "50%",
              marginLeft: "25%",
            }}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn col-md-6 py-3 my-4 "
          style={{
            backgroundColor: "rgba(109, 193, 210, 1)",
            color: "#fff",
            marginLeft: "8rem",
          }}
        >
          Log IN
        </button>
      </form>
      <div
        className="alter"
        style={{
          textAlign: "center",
        }}
      >
        <h5>Login With</h5>
        <p>
          <Image
            src={facebook}
            alt="Picture of the author"
            style={{
              width: "1rem",
              height: "1rem",
              // marginLeft: "12rem",
            }}
          />{" "}
          Login with Facebook
        </p>
        <p>
          <Image
            src={google}
            alt="Picture of the author"
            style={{
              width: "1rem",
              height: "1rem",
              // marginLeft: "12rem",
            }}
          />{" "}
          Login with Google
        </p>
        <hr style={{ borderTop: "4px solid black" }} />
        <p className="mt-4 mb-4">
          Don't have an account?{"    "}
          <a
            href="/register"
            style={{
              textDecoration: "none",
            }}
          >
            <span
              style={{
                color: "rgba(109, 193, 210, 1)",
              }}
            >
              Sign Up
            </span>
          </a>
        </p>
      </div>
      <p>{data}</p>
    </Container>
  );
}
