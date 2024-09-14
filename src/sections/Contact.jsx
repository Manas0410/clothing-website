import React, { useState } from "react";
import Address from "../components/Address";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="c-space my-36" id="contact">
      <h3 className="head-text">Let's talk</h3>
      <p className="text-lg text-white-600 mt-3 mb-5">
        Whether you’re looking to build a new website, improve your existing
        platform, or bring a unique project to life, WE are here to help.
      </p>
      <div className="w-full  gap-3 flex max-sm:flex-col">
        <div className="lg:w-[30%] sm:h-full sm:w-[50%] w-full ">
          <Address />
        </div>
        <div className="lg:w-[70%] sm:w-[50%] w-full ">
          <form
            // onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7  "
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={true}>
              {true ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
