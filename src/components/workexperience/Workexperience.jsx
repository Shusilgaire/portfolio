import React from 'react'
import "./workexperience.css"
import {BiCheck} from "react-icons/bi"

const Workexperience = () => {
  return (
    <section id="workexperience">
    <h2>My Experiences</h2>

  <div className='container workexperience__container'>
    <article className='workexperience'>
      <div className='workexperience__head'>
        <h2>Daimler Trucks Asia, MFTBC</h2>
        <p>Governance Analyst : 2022 Sep - Present</p>
      </div>

      <ul className='workexperience__list'>
        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Order allocation for customers using SAP:LP3.</p>
        </li>

        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Demand forecast analysis and improvement.</p>
        </li>


        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Tracking of daily shipment of orders requested by the customers and releasing them based on the priority.</p>
        </li>

        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Preparation of daily performance reports of the company's different department using Excel and PowerBi.</p>
        </li>

      </ul>
    </article>
                      {/*End of UI?UX Design */}

    <article className='workexperience'>
      <div className='workexperience__head'>
        <h2> Musa-shino Foods Co. ltd.</h2>
        <p> 2019 July - 2022 May</p>
      </div>

      <ul className='workexperience__list'>
        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Led the group of 15+ members to be able to meet the daily requirement of food requested by the customers.</p>
        </li>

        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Prepare and allocate the foods produced according to their designated location and make them ready to be shipped.</p>
        </li>

        <li>
          <BiCheck className='workexperience__list-icon'/>
          <p>Looked after the overall condition of the company's food labelling machines and update them accordingly.</p>
        </li>

      </ul>
    </article>

                   {/*End of Content creation Design */}

  </div>
    </section>
  )
}

export default Workexperience