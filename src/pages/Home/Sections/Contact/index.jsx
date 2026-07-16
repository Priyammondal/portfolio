import { forwardRef, useRef } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import useToast from "react-flare-toast";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const { Toast, triggerToast } = useToast();

  const SERVICE_ID = "service_br18frk";
  const TEMPLATE_ID = "template_1wq0v2j";
  const PUBLIC_KEY = "CjOTtILlF4iXvs_Ei";

  let userDataSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name")
      .min(3, "Name must be atleast 3 characters long"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    message: yup
      .string()
      .required("Please enter your message")
      .min(3, "Message must be atleast 5 characters long"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userDataSchema),
  });

  const submit = (e) => {
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        if (result.status === 200) {
          triggerToast({
            type: "success",
            message: "Your message was successfully sent!",
            duration: 3000,
            animation: "slide",
          });
          reset();
        }
      },
      (error) => {
        console.error("email.js error-->", error.text);
        triggerToast({
          type: "error",
          message: "Sorry, Your message couldn't be sent",
          duration: 3000,
          animation: "slide",
        });
      }
    );
  };
  return (
    <div ref={ref} className="contact pb-5">
      <h2 className="text-center mb-5" id="contactHeading">
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
            <label htmlFor="email">Email</label>
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
            className="contact-btn primary w-100"
          >
            Send Message
          </button>

          <section className="contact-actions">
            <a href="tel:+918328709274" className="contact-btn secondary">
              Call
            </a>
            <a
              href="mailto:priyammondal096@gmail.com"
              className="contact-btn secondary"
            >
              Email
            </a>
          </section>
        </form>
      </section>
      {Toast}
    </div>
  );
});

export default Contact;
