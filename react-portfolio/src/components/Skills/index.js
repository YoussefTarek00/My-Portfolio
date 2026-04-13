import Loader from 'react-loaders'
import './index.scss'
import {
  SiAmazonaws,
  SiBitbucket,
  SiBitrise,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReacthookform,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si'
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
            Full Stack Software Engineer — technical skills and tooling:
            <br />
            <br />
            <span className="tech-tag">
              <span className="skill-title">Frontend: </span>
              React.js, React Native, Next.js, Redux Toolkit, TypeScript,
              JavaScript (ES6+), HTML5, CSS3, SASS/SCSS, Material UI, Tailwind CSS,
              shadcn/ui, Bootstrap 5, Storybook, Axios, React Hook Form, Formik
              <br />
              <br />
              <span className="skill-title">Mobile &amp; Cross-Platform: </span>
              React Native, PWA, TWA (Android), Capacitor (iOS)
              <br />
              <br />
              <span className="skill-title">Backend: </span>
              Node.js, Express.js, NestJS, FastAPI, REST APIs, GraphQL
              <br />
              <br />
              <span className="skill-title">DevOps &amp; Infrastructure: </span>
              Docker, Nginx, Linux Server Administration, CI/CD Pipelines, Git,
              GitHub, Bitbucket, Agile/Scrum, Bitrise (Mobile CI/CD), AWS, Contabo
              <br />
              <br />
              <span className="skill-title">Databases &amp; Storage: </span>
              MongoDB, PostgreSQL, Redis, MinIO (S3-compatible)
              <br />
              <br />
              <span className="skill-title">Security &amp; Auth: </span>
              JWT, Firebase Authentication, RBAC, reCAPTCHA, API Rate Limiting,
              Helmet
              <br />
              <br />
              <span className="skill-title">Testing &amp; Quality: </span>
              Jest, React Testing Library, MSW
              <br />
              <br />
              <span className="skill-title">Real-Time &amp; Systems: </span>
              WebSockets, Socket.IO, Multi-tenant systems
              <br />
              <br />
              <span className="skill-title">AI &amp; Automation: </span>
              AI Agents, OpenAI API, Anthropic, NLP Workflows, Automation Systems
              <br />
              <br />
              <span className="skill-title">
                Architecture &amp; Engineering Practices:{' '}
              </span>
              Microservices Architecture, Clean Architecture, SOLID Principles, Design
              Patterns, System Design, Debugging &amp; Performance Optimization
            </span>
          </p>
          <p>
            Full Stack Software Engineer with 4+ years of experience building
            scalable SaaS platforms, enterprise systems, and AI-powered applications.
            Experienced in owning products end-to-end — from business requirements
            and system design to frontend, backend, and production deployment. Strong
            expertise in React, Next.js, Node.js, and NestJS, with hands-on
            experience in microservices, real-time systems, DevOps, and AI
            integrations.
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
              <SiRedis color="#DC382D" />
            </div>
            <div className="icon">
              <SiFastapi color="#009688" />
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
              <SiSocketdotio color="#010101" />
            </div>
            <div className="icon">
              <SiAmazonaws color="#FF9900" />
            </div>
            <div className="icon">
            <SiTestinglibrary color='#e53935' />
            </div>
            <div className="icon">
              <SiJest color="#C21325" />
            </div>
            <div className="icon">
              <SiOpenai color="#412991" />
            </div>
            <div className="icon">
              <SiBitbucket color="#1d5ecd" />
            </div>
            <div className="icon">
              <SiBitrise color="#68387C" />
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
