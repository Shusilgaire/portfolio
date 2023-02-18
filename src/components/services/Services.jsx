import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
    <h5>What I Do</h5>
    <h2>Key Areas</h2>

  <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>UI/UX Design</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Designing Websites, creating responsive website wireframes.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Self-learning to be able to design and redesign websites based on analytics datas.</p>
        </li>


        <li>
          <BiCheck className='service__list-icon'/>
          <p>Front-end programming (HTML, CSS, JAVASCRIPT) to be able to build web based prototypes.</p>
        </li>
      </ul>
    </article>
                      {/*End of UI?UX Design */}

                      <article className='service'>
      <div className='service__head'>
        <h3> Data Analysis</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Using automated tools like PowerrBi, Excel and R Studio to extract data from primary and secondary sources.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Developing and maintaining databases, data systems and reorganizing data in an understandable manner.</p>
        </li>


        <li>
          <BiCheck className='service__list-icon'/>
          <p>Using statistical tools to identify and analyze patterns and trends in complex data sets that could be helpful for future prediction.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Preparing reports for the management stating trends, patterns and predicting using relevant datats.</p>
        </li>
      </ul>
    </article>

                   {/*End of Content creation Design */}

    <article className='service'>
      <div className='service__head'>
        <h3>Web Development</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Creating the code that brings a website to life and helps it to perform as required by the host.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Designing not only the way a website looks but also how it operates for the targetted user.</p>
        </li>


        <li>
          <BiCheck className='service__list-icon'/>
          <p>Responsibilty for what functions can be performed when a user lands on the webpage.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Working to keep the site running as smmothly and as efficiently as possible using latest mechanisms and applications.</p>
        </li>

      </ul>
    </article>

                       {/*End of Web Development */}

    </div>
    </section>
  )
}

export default Services