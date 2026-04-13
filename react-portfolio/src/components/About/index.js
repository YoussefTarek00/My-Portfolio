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
            scalable SaaS platforms, distributed systems, and AI-powered
            applications.
          </p>
          <p align="LEFT">
            I specialize in designing and delivering end-to-end systems — from
            architecture and backend services to frontend interfaces and
            production deployment. My work focuses on building maintainable,
            high-performance, and scalable applications with real-world business
            impact.
          </p>
          <p>
            I have hands-on experience building multi-tenant SaaS platforms,
            real-time systems, and AI agent workflows integrated with communication
            channels such as WhatsApp, Telegram, and email. I also design secure
            REST APIs, microservices-based architectures, and production-grade
            infrastructure using Docker, CI/CD pipelines, and cloud deployments.
          </p>
          <p>
            Beyond development, I focus on system design, performance
            optimization, and automation — leveraging AI to streamline workflows
            and enhance product capabilities.
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
