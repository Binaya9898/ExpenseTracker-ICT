"use client";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripPlan } from "../register/type";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SERVER from "../server";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tripPlan),
  });

  const [data, setData] = useState("");
  const onSubmit = async (formData) => {
    // display();
    setData(JSON.stringify(formData));
    const postData = await axios.post(SERVER.primaryUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container className="col-md-4 mb-4 pb-4">
      <h1
        className="text-light"
        style={{
          paddingTop: "1rem",
          textAlign: "center",
          backgroundColor: "rgba(109, 193, 210, 1)",
          color: "white",
          paddingBottom: "1rem",
          fontWeight: "650",
        }}
      >
        Plan Your Trip
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="px-4">
        <div className="mb-3">
          <label className="mt-4 mb-2">Trip Name</label>
          <input
            type="text"
            className={`form-control ${errors.trip_name ? "is-invalid" : ""}`}
            placeholder="Trip Name"
            {...register("trip_name")}
          />
          {errors.trip_name && (
            <div className="invalid-feedback">{errors.trip_name.message}</div>
          )}

          <label className="mt-4 mb-2">Projected Start Date</label>
          <input
            type="date"
            className={`form-control  ${errors.start_date ? "is-invalid" : ""}`}
            {...register("start_date")}
          />
          {errors.start_date && (
            <div className="invalid-feedback">{errors.start_date.message}</div>
          )}

          <label className="mt-4 mb-2">Projected End Date</label>
          <input
            type="date"
            className={`form-control ${errors.end_date ? "is-invalid" : ""}`}
            {...register("end_date")}
          />
          {errors.end_date && (
            <div className="invalid-feedback">{errors.end_date.message}</div>
          )}

          <label className="mt-4 mb-2">Trip Duration</label>
          <input
            type="text"
            className={`form-control ${
              errors.trip_duration ? "is-invalid" : ""
            }`}
            placeholder="Trip Duration"
            {...register("trip_duration")}
          />
          {errors.trip_duration && (
            <div className="invalid-feedback">
              {errors.trip_duration.message}
            </div>
          )}

          <label className="mt-4 mb-2">Advance</label>
          <input
            type="advance_payment"
            className={`form-control ${
              errors.advance_payment ? "is-invalid" : ""
            }`}
            placeholder="Advance payment"
            {...register("advance_payment")}
          />
          {errors.advance_payment && (
            <div className="invalid-feedback">
              {errors.advance_payment.message}
            </div>
          )}

          <label className="mt-4 mb-2">Estimated Budget</label>
          <input
            type="text"
            className={`form-control ${
              errors.estimatedBudget ? "is-invalid" : ""
            }`}
            placeholder="Estimated Budget"
            {...register("budget")}
          />
          {errors.budget && (
            <div className="invalid-feedback">{errors.budget.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-success mt-2"
          style={{ float: "right" }}
        >
          Save
        </button>
        <p>{data}</p>
      </form>
    </Container>
  );
}
