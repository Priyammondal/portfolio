import React, { useRef } from "react";
import "./index.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
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
          if (result.status === 200) {
            toast("Your message was successfully sent!✅", {
              duration: 2000,
            });
            reset();
          }
        },
        (error) => {
          console.log("email.js error-->", error.text);
        }
      );
  };
  return (
    <div className="contact pb-5">
      <h2 className="text-center mb-2" id="contactHeading">
        Get in Touch
      </h2>
      <section className="contact_body mx-auto">
        <form ref={form} onSubmit={handleSubmit(submit)}>
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              autoComplete="off"
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
              {...register("message")}
            />
            {errors.message && (
              <p className="text text-danger">{errors.message?.message}</p>
            )}
          </section>
          <button
            title="Send Mail Directly"
            type="submit"
            className="btn btn-outline-warning w-100"
          >
            Send Mail Directly
          </button>
          <section className="d-flex justify-content-between">
            <a href="tel:+918328709274">
              <button
                title="Call Me"
                type="button"
                className="btn btn-success callme"
              >
                Call Me
              </button>
            </a>
            <a href="mailto:priyammondal096@gmail.com">
              <button
                title="Mail Me"
                type="button"
                className="btn btn-danger mailme"
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
