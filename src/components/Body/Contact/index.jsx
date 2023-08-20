import React, { useRef } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = ({ theme }) => {
  const form = useRef();
  let userDataSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(3, "name must be atleast 3 characters long"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Required"),
    message: yup
      .string()
      .required("Required")
      .min(3, "message must be atleast 5 characters long"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userDataSchema),
  });

  const submit = (e) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
          if (result.status === 200) {
            toast("Your message was successfully sent!✅", {
              duration: 2000,
            });
            reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h2 className="text-center">Get in Touch</h2>
      <section className="contact_body mx-auto">
        <form ref={form} onSubmit={handleSubmit(submit)}>
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              autoComplete="off"
              style={{
                backgroundColor: theme === "light" ? "#edf2f7" : "#232934",
                borderColor: theme === "dark" && "#232934",
              }}
              {...register("name")}
            />
            {errors.name && (
              <p className="text text-danger">{errors.name?.message}</p>
            )}
          </section>
          <section>
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              id="email"
              autoComplete="off"
              style={{
                backgroundColor: theme === "light" ? "#edf2f7" : "#232934",
                borderColor: theme === "dark" && "#232934",
              }}
              {...register("email")}
            />
            {errors.email && (
              <p className="text text-danger">{errors.email?.message}</p>
            )}
          </section>
          <section>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-control"
              id="message"
              autoComplete="off"
              style={{
                backgroundColor: theme === "light" ? "#edf2f7" : "#232934",
                borderColor: theme === "dark" && "#232934",
              }}
              {...register("message")}
            />
            {errors.message && (
              <p className="text text-danger">{errors.message?.message}</p>
            )}
          </section>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: theme === "dark" ? "#d6bcfa" : "#805ad5",
              color: theme === "light" && "white",
            }}
          >
            Send Mail Directly
          </button>
          <section className="d-flex justify-content-between">
            <a href="tel:+918328709274">
              <button
                type="button"
                className="btn btn-success callme"
                style={{
                  backgroundColor: theme === "dark" && "#9ae6b4",
                  color: theme === "light" && "white",
                }}
              >
                Call Me
              </button>
            </a>
            <a href="mailto:priyammondal096@gmail.com">
              <button
                type="button"
                className="btn btn-danger mailme"
                style={{
                  backgroundColor: theme === "dark" ? "#fbb6ce" : "#d53f8c",
                  color: theme === "light" && "white",
                }}
              >
                Mail Me
              </button>
            </a>
          </section>
        </form>
      </section>
    </div>
  );
};

export default Contact;
