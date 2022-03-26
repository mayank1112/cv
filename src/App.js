import './css/App.css';
import './css/responsive.css';
import { Achievement } from './Achievement';
import { useState } from 'react';
import { useScroll } from './useScroll';
import AnimatedSection from './AnimatedSection';
import ScrollTop from "react-scrolltop-button";

const INITIAL_BOTTOM = 15;

function App() {
  const [bottom, setBottom] = useState(`${INITIAL_BOTTOM}px`);
  const [textShadow, setTextShadow] = useState('1px 1px 1px black');
  const [textOpacity, setTextOpacity] = useState(1);
  const [iconOpacity, setIconOpacity] = useState(.8);
  const [playing, setPlaying] = useState(false);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height;
    setTextShadow(`1px 1px ${scrolled * 100}px black`);
    setTextOpacity(1 - scrolled * 24);
    setBottom(`${INITIAL_BOTTOM + scrolled * 800}px`);
  }

  useScroll(listenToScroll, []);

  const playSound = (event) => {
    setPlaying(true);
    setIconOpacity(.6);
    event.preventDefault();
    const audio = new Audio('/assets/sounds/mayank.mp3');
    audio.play();
    audio.onended = () => {
      setIconOpacity(.8);
      setPlaying(false);
    }
  }
  const mouseOver = () => {
    setIconOpacity(1);
  }
  const mouseOut = () => {
    setIconOpacity(.8);
  }

  return (
    <div className="container">
      <div className="row">
        <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
          <div className="row">
            <div className="heading">
              <div className="feature-img">
                <img src="/assets/images/mayank-mahajan.jpg" className="responsive-img" alt="Mayank Mahajan" />
              </div>
              <div className="title col s12 m12 l9 right  wow" style={{ bottom, textShadow, opacity: textOpacity }}>
                <h2>
                  Mayank
                  <a href='' onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={playSound}>
                    <img
                      style={{ opacity: iconOpacity }}
                      border={0}
                      title='Pronunciation'
                      src={playing ? '/assets/images/sound-disabled.svg' : '/assets/images/sound.svg'}
                      width='32'
                      height='32'
                    />
                  </a>
                </h2>
                <span>React Engineer
                </span>
              </div>
            </div>

            <div className="col l12 m12 s12 sort-info sidebar-item">
              <div className="row">
                <div className="col m12 s12 l3 icon">

                  <i className="fa fa-user"></i>
                </div>
                <div className="col m12 s12 l9 info wow a1 fadeIn">
                  <p>Having 12 years of demonstrated experience in development of responsive Single
                  Page Apps and user-friendly UI components that meet modern accessibility
                  standards, seasoned in converting artistic designs into recyclable UI
                  components. Leading and mentoring teams in Banking, Medical and Retail services
                  domain, proficient in Agile best practices with active participation in agile
                                        ceremonies.<br /><br /></p>

                  <p>A passionate, pragmatic engineer with an inquisitive mind who is motivated to
                  make change for the better, I enjoy working as part of a team and be a keen
                  problem solver. Comfortable with modern engineering practices and frontend
                  development tooling and technologies, I use innovation to improve the customer
                                        experience and efficiency of engineering team.<br /><br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  mobile sidebar-item">
              <AnimatedSection>
                <a href="tel:+447823616840">
                  <div className="row">
                    <div className="col m12 s12 l3 icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="col m12 s12 l9 info wow a2">
                      <div className="section-item-details">
                        <div className="personal">
                          <h4><img src='/assets/images/phone.png' alt='' /></h4>
                          <span>mobile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            </div>
            <div className="col l12 m12 s12  email sidebar-item ">
              <AnimatedSection>
                <a href="mailto:contact@mayank.uk"><div className="row">
                  <div className="col m12 s12 l3 icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="col m12 s12 l9 info wow a3">
                    <div className="section-item-details">
                      <div className="personal">
                        <h4><img src='/assets/images/email.png' alt='' /></h4>
                        <span>e-mail</span>
                      </div>
                    </div>
                  </div>
                </div>
                </a>
              </AnimatedSection>
            </div>
            <div className="col l12 m12 s12  skills sidebar-item">
              <AnimatedSection>
                <div className="row">
                  <div className="col m12 l3 s12 icon">
                    <i className="fa fa-university"></i>
                  </div>
                  <div className="col m12 l9 s12 skill-line a5 wow" data-wow-delay="0.5s">
                    <h3>Professional Skills </h3>
                    <div><i className="fa fa-check-square"></i> React JS</div>
                    <div><i className="fa fa-check-square"></i> Typescript</div>
                    <div><i className="fa fa-check-square"></i> Ecma Script</div>
                    <div><i className="fa fa-check-square"></i> Javascript</div>
                    <div><i className="fa fa-check-square"></i> SCSS</div>
                    <div><i className="fa fa-check-square"></i> Node JS</div>
                    <div><i className="fa fa-check-square"></i> Angular JS</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </aside>

        <section className="col s12 m12 l8 section">
          <div className="row">
            <div className="section-wrapper z-depth-1">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="custom-content col s12 m12 l10 wow a1 fadeIn">
                <h2>Education</h2>

                <div className="custom-content-wrapper wow a2 custom-content-wrapper-last" data-wow-delay="0.2s">
                  <h3>Bachelor's in Technology <span>@Guru Nanak Dev University</span></h3>
                  <span>MAY 2005 - May 2009 </span>
                  <p>Completed B.Tech. degree in Computer Science & Engineering in May, 2009</p>
                </div>
              </div>
            </div>

            <div className="section-wrapper z-depth-1">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-suitcase"></i>
              </div>
              <div className="custom-content work-content col s12 m12 l10 wow a1">
                <h2>Work Experience</h2>
                <div className="section-item-details" ><div className="custom-content-wrapper wow a3 fadeIn">
                  <h3>Senior Front-end Engineer <span>@J.P. Morgan, United Kingdom</span></h3>
                  <span>OCT 2021 - Present </span>
                  <ol>
                    <li>Development of responsive and reusable UI components for displaying and editing
                    interest rates using ReactJS, Typescript and SCSS that meet accessibility standards across
a vast array of web-capable devices and browsers</li>
                    <li>Working with Java backend developers to create solutions for integrating frontend
application with Spring API’s</li>
                    <li>Working in agile framework as an individual contributor. Responsibilities include
                    interaction with Business stakeholders, reviewing and estimating tasks/acceptance
                    criteria, advocating for the user experience whether it be performance, accessibility, or
general UX best practices and providing technical solutions</li>
                    <li>Active participation in agile ceremonies and ticket tracking using Jira</li>
                    <li>Unit testing the application code using React testing library and Jasmine</li>
                    <li>Migrating Angular application to React application using Lerna</li>
                    <li>Mentoring the team, bringing them up-to-speed</li>
                  </ol>
                </div>
                </div>
                <AnimatedSection>
                  <div className="custom-content-wrapper wow a3 fadeIn">
                    <h3>Front-end Engineer <span>@Sainsbury's, United Kingdom</span></h3>
                    <span>OCT 2019 - JUN 2021</span>
                    <ol>
                      <li>Development of responsive and reusable UI components for new Nectar offers using javascript, SCSS and ReactJS that meet accessibility standards across a vast array of web-capable devices and browsers.</li>
                      <li>Integrate with third party tools like One trust cookie banner for GDPR compliance/data protection, Google firebase to toggle features remotely, Google Optimize A/B testing tool for analyzing user habits to improve user experience and conversion rate.</li>
                      <li>Working closely with development teams of partners such as British Airways and Agoda to solution complex integration of partner offers with Nectar.</li>
                      <li>Refactoring the existing components to reuse Sainsbury’s Luna design system wherever possible. Redesigning the existing pages to improve user experience and responsive design principles.</li>
                      <li>Working in agile framework as an individual contributor. Responsibilities include interaction with Business stakeholders, reviewing stories/acceptance criteria, advocating for the user experience whether it be performance, accessibility, or general UX best practices and providing technical solutions.</li>
                    </ol>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="custom-content-wrapper wow a3 custom-content-wrapper-last">
                    <h3>Front-end Engineer <span>@American Express, United Kingdom</span></h3>
                    <span>MAR 2018 - OCT 2019 </span>
                    <ol>
                      <li>Third party integration of American Express CRM application with IVR (Interactive Voice Response) System using Genesis and User Customer Identification System (UCID) for identifying and authenticating the callers using HMAC authentication process for APIGEE API’s</li>
                      <li>Interact with clients to elicit architectural and non-functional requirements like performance, scalability, reliability, availability, maintainability</li>
                      <li>Translating designs and wireframes into high quality code; Optimizing components for maximum performance across a vast array of web-capable devices and browsers, internationalization of messages using react-intl library</li>
                      <li>Deploying the Reactjs components and one-amex modules into Dev, UAT and production using Jenkins</li>
                      <li>Development of Nodejs backend application, raising Service Now Change Requests for deployment using XLRelease deployment tool; Troubleshooting issues using Splunk</li>
                      <li>Documenting the application architecture on Confluence</li>
                      <li>Active participation in agile ceremonies and defect/user story tracking using Rally</li>
                    </ol>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            <div className="section-wrapper z-depth-1">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-trophy"></i>
              </div>
              <div className="custom-content col s12 m12 l10 wow a1 achievements-content">
                <h2>Achievements</h2>
                <AnimatedSection>
                  <Achievement src="/assets/images/1620000910079.png" title="Microsoft Certified Programmer" />
                </AnimatedSection>
                <AnimatedSection>
                  <Achievement src="/assets/images/1618999852510.jpeg" title="Citi Bank Star Performer" />
                </AnimatedSection>
                <AnimatedSection>
                  <Achievement src="/assets/images/spot-award.png" title="Infosys Spot Award" />
                </AnimatedSection>
                <AnimatedSection><Achievement src="/assets/images/news.png" title="Research on Animated email featured in News" />
                  <Achievement src="/assets/images/1619000693265.jpeg" title="Featured in School Magazine" />
                </AnimatedSection>
              </div>
            </div>

            <div className="section-wrapper z-depth-1 footer-content">
              <AnimatedSection>
                <div className="section-icon col s12 m12 l2">
                  <i className="fa fa-link"></i>
                </div>
                <div className="custom-content col s12 m12 l10 wow a1 achievements-content">

                  <h2>Links</h2>
                  <a href="https://www.linkedin.com/in/mayank-mahajan-b1b79121/" rel="noreferrer" target="_blank"><i className='fa fa-external-link'></i>LinkedIn Profile</a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
      <ScrollTop
        text={
          <div className='scrollToTopIcon'><i className='fa fa-angle-double-up upArrow'></i></div>
        }
        className="scrollToTopButton"
      />
    </div>
  );
}

export default App;
