import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <a href="https://fitness-tracker-self.vercel.app/"><button>Start Your Journey</button></a>
          <button>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
