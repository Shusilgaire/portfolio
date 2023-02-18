import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
    <h5>What Skills I have</h5>
    <h2>My Expertise</h2>

    <div className='container experience__container'>

      <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>REACT</h4>
              <small className='text-light'>Intermediate</small>
             </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Begineer</small>
              </div>
          </article>
         </div>
      </div>

      <div className="experience__backend">
      <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MOngoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>PYTHON</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
        </div>
      </div>

      <div className="experience__analysis">
      <h3>Data Analysis</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>R STUDIO</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MS PowerBI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MATLAB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>MS EXCEL</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
        </div>
      </div>

  </div>
  </section>
  )
}

export default Experience