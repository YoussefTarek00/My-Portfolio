import Loader from 'react-loaders'
import './index.scss'
import { SiTailwindcss,SiTypescript,SiMui,SiReacthookform,SiWebpack,SiCanva, SiJest, SiBitbucket, SiNodedotjs, SiMongodb, SiExpress, SiTestinglibrary, SiJira, SiDocker, SiNginx, SiStorybook, SiNextdotjs, SiNestjs, SiGraphql, SiPostgresql, SiRedux, SiFirebase} from 'react-icons/si'
import cv from '../../assets/cv/Youssef Tarek - Full Stack Software Engineer Resume.pdf'
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
            Full Stack Software Engineer with expertise in modern web technologies:
            <br />
            <span className="tech-tag">
              Frontend: React.js, Next.js, Redux Toolkit, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS/SCSS, Material UI, Tailwind CSS, Shadcn/ui, Bootstrap 5, PWA/TWA, Storybook, React Hook Form, Formik
              <br />
              Backend: Node.js, Express.js, Nest.js, REST APIs, GraphQL, JWT, Firebase
              <br />
              Databases: MongoDB, PostgreSQL
              <br />
              Testing: Jest, React Testing Library, MSW
              <br />
              DevOps: Docker, Nginx, CI/CD Pipelines, Git, GitHub, Bitbucket, Linux, Webpack, Bitrise
              <br />
              Architecture: Clean Architecture, SOLID Principles, Design Patterns, System Design, Performance Optimization
              <br />
              AI & Automation: Custom ChatGPT Agents, AI Agents & NLP Intent Handling, Automation Workflows
            </span>
          </p>
          <p>
            Specialized in building scalable SaaS platforms, enterprise systems,
            and AI-powered automation solutions. Experienced in transforming web
            applications into mobile apps using PWA, TWA, and Capacitor technologies.
            Committed to writing clean, maintainable code and delivering
            production-ready solutions.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://linkedin.com/in/youssefTarek-dev"
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
              <SiNextdotjs color="#000000" />
            </div>
            <div className="icon">
              <SiRedux color="#764ABC" />
            </div>
            <div className="icon">
              <SiReacthookform color="#f50c95"  />
            </div>
            <div className="icon">
              <SiNodedotjs color="#68A063" />
            </div>
            <div className="icon">
              <SiNestjs color="#E0234E" />
            </div>
            <div className="icon">
              <SiGraphql color="#E10098" />
            </div>
            <div className="icon">
              <SiFirebase color="#FFCA28" />
            </div>
            <div className="icon">
              <SiExpress color="#000000" />
            </div>
            <div className="icon">
              <SiMongodb color="#47A248" />
            </div>
            <div className="icon">
              <SiPostgresql color="#336791" />
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
