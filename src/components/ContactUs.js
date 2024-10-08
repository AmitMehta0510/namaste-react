import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Feel free to reach out using the form below.
      </p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />{" "}
      </form>
    </div>
  );
};

export default ContactUs;
