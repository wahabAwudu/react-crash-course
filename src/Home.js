import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>
        Hello welcome home {props.username} | {props.email}
      </h1>
      <p>This is where you belong!</p>
      <p>All that you want will be provided by your family</p>
    </div>
  );
};

export default Home;
