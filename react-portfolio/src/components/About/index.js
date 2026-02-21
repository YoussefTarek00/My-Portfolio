import { useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Full Stack Software Engineer with 4+ years of experience building
            scalable web applications, SaaS platforms, and AI-powered systems.
            Expert in React.js, Node.js, REST APIs, MongoDB, PostgreSQL, and
            workflow automation.
          </p>
          <p align="LEFT">
            Skilled in clean architecture, performance optimization, and
            delivering maintainable, production-ready solutions. Passionate about
            leveraging AI agents and automation to boost productivity and solve
            complex business challenges.
          </p>
          <p>
            Experienced in developing multi-tenant SaaS platforms with analytics
            dashboards and secure REST APIs. Built enterprise HR systems and
            transformed web applications into deployable mobile apps for both
            Android and iOS platforms using PWA, TWA, and Capacitor technologies.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#c69" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
