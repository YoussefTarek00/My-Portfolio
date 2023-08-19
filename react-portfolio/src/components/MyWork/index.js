import './index.scss'
import React from 'react'
import { data } from './data'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MyWork = () => {
  return (
    <>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <>
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#000000" />
                  </a>
                  <a
                    href={demo}
                    className="btn "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </article>
            </>
          )
        })}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWork
