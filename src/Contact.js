import React from "react";

const Contact = (props) => {
  return (
    <React.Fragment>
      <h1>Hello this is the contact page</h1>
      <form>
        Username
        <input type="text" />
        <br />
        Password <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Contact;
