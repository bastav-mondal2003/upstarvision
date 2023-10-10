import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Services = () => {
  const [name, setname] = useState(" ");
  const [email, setemail] = useState(" ");
  const [phone, setphone] = useState(" ");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {  name, email };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for contacting us");
        setphone(" ");
        setemail(" ");
        setname(" ");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb - 3}>
          <label htmlFor="name" className="htmlForm-label" id="label">
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="htmlForm-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            style={{margin:10}}
          />
        </div>

        <div className={styles.mb - 3}>
          <label htmlFor="email" className="htmlForm-label" id="">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="htmlForm-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            style={{margin:10}}
          />
        </div>
        {/* <div className={styles.mb - 3}>
          <label htmlFor="phone" className="htmlForm-label">
            Enter your phone
          </label>
          <input
            type="phone"
            value={phone}
            className="htmlForm-control"
            id="phone"
            name="phone"
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Services;
