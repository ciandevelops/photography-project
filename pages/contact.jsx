import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit The Form Below For More Information & Quotes."
      />
      <Contact />
    </div>
  );
};

export default contact;
