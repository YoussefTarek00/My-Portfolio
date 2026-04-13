import './index.scss'
import React from 'react'
import { practices, professionalExperience } from './data'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const renderPortfolioItems = (items) =>
  items.map(({ id, image, title, github, demo }) => (
    <article key={id} className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio-item-cta">
        {github && (
          <a href={github} className="btn" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#000000" />
          </a>
        )}
        <a href={demo} className="btn " target="_blank" rel="noreferrer">
          {github ? 'Demo' : 'Visit'}
        </a>
      </div>
    </article>
  ))

const MyWork = () => {
  return (
    <>
      <div className="container portfolio_container">
        <section className="portfolio-section" aria-labelledby="portfolio-pro-label">
          <h2 id="portfolio-pro-label" className="portfolio-section-title">
            Professional experience
          </h2>
          <div className="portfolio-section-items">
            {renderPortfolioItems(professionalExperience)}
          </div>
        </section>
        <section className="portfolio-section" aria-labelledby="portfolio-practice-label">
          <h2 id="portfolio-practice-label" className="portfolio-section-title">
            Practice / Mini Projects
          </h2>
          <div className="portfolio-section-items">
            {renderPortfolioItems(practices)}
          </div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default MyWork
