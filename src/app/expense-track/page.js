"use client";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../register/type";
import { useState } from "react";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(expenseSchema),
  });

  const [data, setData] = useState("");
  const onSubmit = (formData) => setData(JSON.stringify(formData));

  // const onSubmit = (data: SignUpSchemaType) => setData(JSON.stringify(data));

  return (
    <Container className="col-md-4">
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
        Expense Tracking
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="px-4">
        <div className="mb-3">
          <label className="mt-4 mb-2">Trip Name</label>
          <input
            type="text"
            className={`form-control ${errors.tripName ? "is-invalid" : ""}`}
            placeholder="Trip Name"
            {...register("tripName")}
          />
          {errors.tripName && (
            <div className="invalid-feedback">{errors.tripName.message}</div>
          )}

          <label className="mt-4 mb-2">Title</label>
          <input
            type="text"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            placeholder="Title"
            {...register("title")}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}

          <label className="mt-4 mb-2">Total Amount</label>
          <input
            type="text"
            className={`form-control ${errors.totalAmount ? "is-invalid" : ""}`}
            placeholder="Total Amount"
            {...register("totalAmount")}
          />
          {errors.totalAmount && (
            <div className="invalid-feedback">{errors.totalAmount.message}</div>
          )}

          <label className="mt-4 mb-2">Heading</label>
          <input
            type="text"
            className={`form-control ${errors.heading ? "is-invalid" : ""}`}
            placeholder="Heading"
            {...register("heading")}
          />
          {errors.heading && (
            <div className="invalid-feedback">{errors.heading.message}</div>
          )}

          <label className="mt-4 mb-2">Type</label>
          <input
            type="text"
            className={`form-control ${errors.type ? "is-invalid" : ""}`}
            placeholder="Type"
            {...register("type")}
          />
          {errors.type && (
            <div className="invalid-feedback">{errors.type.message}</div>
          )}

          <label className="mt-4 mb-2">Photos</label>
          <input
            type="file"
            className={`form-control ${errors.photos ? "is-invalid" : ""}`}
            {...register("photos")}
          />
          {errors.photos && (
            <div className="invalid-feedback">{errors.photos.message}</div>
          )}

          <label className="mt-4 mb-2">Relevant File</label>
          <input
            type="file"
            className={`form-control ${
              errors.relevantFile ? "is-invalid" : ""
            }`}
            {...register("relevantFile")}
          />
          {errors.relevantFile && (
            <div className="invalid-feedback">
              {errors.relevantFile.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success my-4"
          style={{
            float: "right",
          }}
        >
          Upload
        </button>
        <p>{data}</p>
      </form>
    </Container>
  );
}
