import React from "react";
import Logos from "../Logos";
import aboutHero from "../../assets/forPages/aboutHero.jpg";
import comingSoon from "../../assets/forPages/comingSoon.jpg";

function About() {
  return (
    <div className="About Page">
      <img className="Page__hero" src={aboutHero} alt="Trees at the farm"></img>
      <h1 className="Page__title">About Casey Tree Farm</h1>
      <p className="Page__p">
        Casey Tree Farm, originally surveyed by our first president and avid
        horticulturalist George Washington, occupies 730 acres of land along the
        Shenandoah River in Berryville, VA. We have dedicated 100 acres of that
        land to sustainable tree production using techniques that prioritize
        long term soil health and productivity, while safeguarding the overall
        environment.
      </p>
      <h1 className="Page__title">Sustainability at Casey Tree Farm</h1>
      <p className="Page__p">
        Our vision is the production of sustainably grown, high quality trees to
        help communities meet their tree canopy goals. Along with meticulous
        care we provide to our soils by feeding the microflora using
        organic-based inputs, all our trees are grown in-ground using rootbags,
        which encourages greater fine root production than traditional balled
        and burlapped trees. More fine roots mean better water
        and nutrient exchange and better chances of survival post-planting.
        Rootbag-grown trees also use less soil than their balled and burlapped
        counterparts, reducing environmental impacts and transportation costs,
        and simplifying planting.
      </p>
      <img
        src={comingSoon}
        className="Page__hero"
        alt="cute flower buds signifying that this section is growing!"
      ></img>
      <p className="Page__contact">CONTACT | 202.257.3666</p>
      <Logos></Logos>
    </div>
  );
}

export default About;
