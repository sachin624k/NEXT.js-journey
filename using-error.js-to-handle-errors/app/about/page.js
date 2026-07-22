"use client";

import { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["Mango", "Apple"]);
  return (
    <>
      <div>
        <h1 className="title">About Us</h1>
        <p>We are a company dedicated to providing quality services.</p>
        <button
          onClick={() => {
            setFruits(null);
          }}
        >
          Click me
        </button>
        {fruits.map((fruit) => (
          <p key={fruit}>{fruit}</p>
        ))}
      </div>
    </>
  );
};

export default About;
