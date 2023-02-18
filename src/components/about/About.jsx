import React from 'react'
import "./about.css"
import ME from "../../assets/me.png"
import {FaAward} from "react-icons/fa"
import {MdCastForEducation} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> Expert </small>
            </article>

            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5>Education</h5>
              <small> Undergraduate </small>
            </article>
          </div>
          <p>
            I am a senior at Temple University, Japan Campus. I am studying
            Computer Science. I always had a passion of tecnology and new
            creativity and because of it I started learning web-development. I
            am mostly interested in front-end development and creating new and
            modern UI/UX design.
          </p>

          <a href="#contact" className="btn btn-primary">
            Talk to Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
