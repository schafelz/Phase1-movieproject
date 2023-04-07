import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted", { name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    navigate(`/Contact/Success/${name}/${email}/${concern}`);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <h3>Welcome to our Contact page</h3>
      <p>
        Please feel free to leave your details and concerns below. We value your
        feedback and will get back to you as soon as possible.
      </p>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Concerns:
            <textarea
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              required
            />
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
