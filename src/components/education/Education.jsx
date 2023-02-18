import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section id="education">
      <h5> Qualifications</h5>
      <h2>My Educational Background</h2>

      <div className="container education__container">
        <div className="education_temple">
          <h2>Temple University</h2>
          <div className="education__content">
            <article className="education__details">
              <div>
                <h4>Bachelors of Arts: 2019 May - Present </h4>
                <small className="text-light">
                  Major: Economics, Minor: Computer Science
                </small>
              </div>
            </article>
          </div>
        </div>
        <div className="education_temple">
          <h2>Udemy</h2>
          <div className="education__content">
            <article className="education__details">
              <div>
                <h4>The Complete Web development Bootcamp</h4>
                <small className="text-light">
                  Full Stack Application focusing React, Nodejs, MongoDB and
                  Javascript
                </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;