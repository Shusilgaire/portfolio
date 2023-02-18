import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio.png"
import IMG2 from "../../assets/tictactoegame.png"
import IMG3 from "../../assets/restaurant-app.png"
import IMG4 from "../../assets/ebook.png"

const data = [
  {id: 1,
    image: IMG1,
    title: "Portfolio",
    github: 'https://github.com/Shusilgaire/portfolio',
    demo:"https://portfolio.shusilgaire.com"
},

{
  id: 2,
  image: IMG2,
  title: "Tic-Tac-Toe Game App",
  github: "https://github.com/Shusilgaire/tic-tac-toe",
  demo: "https://tictactoe.shusilgaire.com"
},
{
  id: 3,
  image: IMG3,
  title: "Restaurant App",
  github: "https://github.com/Shusilgaire/restaurant-app",
  demo: "https://delhidurbar.shusilgaire.com"
},
{
  id: 4,
  image: IMG4,
  title: "eBook App",
  github: "https://github.com/Shusilgaire/ebook-app",
  demo: "https://ebook-app.shusilgaire.com/"
}
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        {
          data.map(({id, image, title, github, demo}) => {
            return (
                  <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img src={image} alt="" />
                    </div>
                      <h3>{title}</h3>
                    <div className='portfolio__item-cta'>
                      <a href={github} className='btn' target="_blank"> Github </a>
                      <a href={demo} className='btn btn-primary' target="_blank"> Live Demo </a>
                    </div>
                </article> )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio