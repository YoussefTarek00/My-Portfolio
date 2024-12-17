import Loader from 'react-loaders'
import './index.scss'
import { SiTailwindcss,SiTypescript,SiMui,SiReacthookform,SiWebpack,SiCanva, SiJest, SiBitbucket, SiNodedotjs, SiMongodb, SiExpress, SiTestinglibrary, SiJira, SiDocker, SiNginx, SiStorybook} from 'react-icons/si'
import cv from '../../assets/cv/Y.T-CV.pdf'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithubSquare,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <>
      <div className="container skills">
        <div className="text-zone">
          <h1 aria-label="Skills &amp; Experience" className="blast-root">
            <span className="blast" aria-hidden="true" style={{ opacity: '1' }}>
              Skills
            </span>
            <span className="blast" aria-hidden="true" style={{ opacity: '1' }}>
              &amp;
            </span>
            <span className="blast" aria-hidden="true" style={{ opacity: '1' }}>
              Experience
            </span>
          </h1>
          <p>
            An Astonishing Web Developer skilled in technologies such as
            <br />
            <span className="tech-tag">HTML5, CSS3, JavaScript, TypeScript, React.Js, Node.js, Express.js, MongoDB,  ReactHookForm, Particles.js, Canvas API, Bootstrap, TailwindCss, Material UI, Sass, StoryBook, Design Patterns, SOLID Principles, Docker, Nginx, Webpack, PWAs, Debugging, Unit Test, Integration Test, React Testing Library, Jest, MSW, Atlassian Jira, Bitbucket, Git, GitHub.</span>
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and good
            in responsive, mobile-first web design. I put special effort into
            optimizing my code and providing the best user experience. I would
            love to give you any kind of support also after the project's
            completion. I guarantee a commitment during work on your project.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/youssef-tarek-317ab125b/"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            profile for more details. Also you can checkout my cv on this
            <a target="_blank" href={cv} rel="noreferrer">
              Link
            </a>
          </p>
        </div>
        <div className="skills-container">
          <div className="skills-icons">
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="icon">
              <SiTypescript color="#007acc" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="icon">
              <SiReacthookform color="#f50c95"  />
            </div>
            <div className="icon">
              <SiNodedotjs color="#68A063" />
            </div>
            <div className="icon">
              <SiExpress color="#000000" />
            </div>
            <div className="icon">
              <SiMongodb color="#47A248" />
            </div>
            <div className="icon">
              <SiCanva color="#F06529"  />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faBootstrap} color="#553C7B" />
            </div>
            <div className="icon">
              <SiTailwindcss color="#28A4D9" />
            </div>
            <div className="icon">
              <SiMui color="rgb(12 33 152)" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faSass} color="#c69" />
            </div>
            <div className="icon">
            <SiStorybook color="#FF4785" />
            </div>
            <div className="icon">
            <SiDocker  color="#2496ed" />
            </div>
            <div className="icon">
            <SiNginx color="#000000" />
            </div>
            <div className="icon">
              <SiWebpack color="#1C78C0" />
            </div>
            <div className="icon">
            <SiTestinglibrary color='#e53935' />
            </div>
            <div className="icon">
              <SiJest color="#C21325" />
            </div>
            <div className="icon">
              <SiJira color="#1d5ecd" />
            </div>
            <div className="icon">
              <SiBitbucket color="#1d5ecd" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faGithubSquare} color="#000000 " />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
