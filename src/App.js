import './css/App.css';
import './css/responsive.css';
import { Achievement } from './Achievement';
import { useEffect, useState } from 'react';

const INITIAL_BOTTOM = 23;

function App() {
  const [bottom, setBottom] = useState(`${INITIAL_BOTTOM}px`);
  const [textShadow, setTextShadow] = useState('0 0 0 white');

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height;
    console.log("scrolled", `11 + ${scrolled * 100}px`);
    setTextShadow(`0 0 ${scrolled * 100}px white`);
    setBottom(`${INITIAL_BOTTOM + scrolled * 800}px`);
  }
  return (
    <div className="container">
      <div className="row">
        <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">
          <div className="row">
            <div className="heading">
              <div className="feature-img">
                <a href="/">
                  <img src="/assets/images/mayank-mahajan.jpg" className="responsive-img" alt="" /></a>
              </div>
              <div className="title col s12 m12 l9 right  wow fadeIn" style={{ bottom, textShadow }}>
                <h2>Mayank</h2>
                <span>React Engineer</span>
              </div>
            </div>

            <div className="col l12 m12 s12 sort-info sidebar-item">
              <div className="row">
                <div className="col m12 s12 l3 icon">

                  <i className="fa fa-user"></i>
                </div>
                <div className="col m12 s12 l9 info wow fadeIn a1" data-wow-delay="0.1s">

                  <div className="section-item-details">

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
                    <p>Some of the tech I use are: ES11, React, Redux, Node, SCSS, Circle CI,
                    Jenkins
                                        and JSX.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  mobile sidebar-item">
              <div className="row">
                <div className="col m12 s12 l3 icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="col m12 s12 l9 info wow fadeIn a2" data-wow-delay="0.2s">
                  <div className="section-item-details">
                    <div className="personal">
                      <h4><a href="tel:7823616840">(+44)-78236-16840</a></h4>
                      <span>mobile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  email sidebar-item ">
              <div className="row">
                <div className="col m12 s12 l3 icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="col m12 s12 l9 info wow fadeIn a3" data-wow-delay="0.3s">
                  <div className="section-item-details">
                    <div className="personal">
                      <h4><a href="mailto:someone@example.com">contact@mayank.uk</a></h4>
                      <span>e-mail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l12 m12 s12  skills sidebar-item">
              <div className="row">
                <div className="col m12 l3 s12 icon">
                  <i className="fa fa-calendar-o"></i>
                </div>
                <div className="col m12 l9 s12 skill-line a5 wow fadeIn" data-wow-delay="0.5s">
                  <h3>Professional Skills </h3>
                  <div><i className="fa fa-check-square"></i> React JS</div>
                  <div><i className="fa fa-check-square"></i> SCSS</div>
                  <div><i className="fa fa-check-square"></i> Node JS</div>
                  <div><i className="fa fa-check-square"></i> Angular JS</div>
                  <div><i className="fa fa-check-square"></i> Ecma Script</div>
                  <div><i className="fa fa-check-square"></i> Javascript</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="col s12 m12 l8 section">
          <div className="row">
            <div className="section-wrapper z-depth-1">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="custom-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s">
                <h2>Education</h2>

                <div className="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s">
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
              <div className="custom-content work-content col s12 m12 l10 wow fadeIn a1" data-wow-delay="0.1s">
                <h2>Work Experience</h2>
                <div className="custom-content-wrapper wow fadeIn a2" data-wow-delay="0.2s">
                  <h3>Front-end Developer <span>@Sainsbury's, United Kingdom</span></h3>
                  <span>OCT 2019 - Present </span>
                  <p>
                    <ol>
                      <li>Development of responsive and reusable UI components for new Nectar offers using javascript, SCSS and ReactJS that meet accessibility standards across a vast array of web-capable devices and browsers.</li>
                      <li>Integrate with third party tools like One trust cookie banner for GDPR compliance/data protection, Google firebase to toggle features remotely, Google Optimize A/B testing tool for analyzing user habits to improve user experience and conversion rate.</li>
                      <li>Working closely with development teams of partners such as British Airways and Agoda to solution complex integration of partner offers with Nectar.</li>
                      <li>Refactoring the existing components to reuse Sainsbury’s Luna design system wherever possible. Redesigning the existing pages to improve user experience and responsive design principles.</li>
                      <li>Working in agile framework as an individual contributor. Responsibilities include interaction with Business stakeholders, reviewing stories/acceptance criteria, advocating for the user experience whether it be performance, accessibility, or general UX best practices and providing technical solutions.</li>
                    </ol>
                  </p>
                </div>
                <div className="custom-content-wrapper wow fadeIn a3" data-wow-delay="0.3s">
                  <h3>Front-end Developer <span>@American Express, United Kingdom</span></h3>
                  <span>MAR 2018 - OCT 2019 </span>
                  <p>
                    <ol>
                      <li>Third party integration of American Express CRM application with IVR (Interactive Voice Response) System using Genesis and User Customer Identification System (UCID) for identifying and authenticating the callers using HMAC authentication process for APIGEE API’s</li>
                      <li>Interact with clients to elicit architectural and non-functional requirements like performance, scalability, reliability, availability, maintainability</li>
                      <li>Translating designs and wireframes into high quality code; Optimizing components for maximum performance across a vast array of web-capable devices and browsers, internationalization of messages using react-intl library</li>
                      <li>Deploying the Reactjs components and one-amex modules into Dev, UAT and production using Jenkins</li>
                      <li>Development of Nodejs backend application, raising Service Now Change Requests for deployment using XLRelease deployment tool; Troubleshooting issues using Splunk</li>
                      <li>Documenting the application architecture on Confluence</li>
                      <li>Active participation in agile ceremonies and defect/user story tracking using Rally</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>

            <div className="section-wrapper z-depth-1">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-trophy"></i>
              </div>
              <div className="custom-content col s12 m12 l10 wow fadeIn a1 achievements-content">
                <h2>Achievements</h2>
                <Achievement src="/assets/images/1620000910079.png" title="Microsoft Certified Programmer" />
                <Achievement src="/assets/images/1618999852510.jpeg" title="Citi Bank Star Performer" />
                <Achievement src="/assets/images/spot-award.png" title="Infosys Spot Award" />
                <Achievement src="/assets/images/news.png" title="Research on Animated email featured in News" />
                <Achievement src="/assets/images/1619000693265.jpeg" title="Featured in School Magazine" />
              </div>
            </div>

            <div className="section-wrapper z-depth-1 footer-content">
              <div className="section-icon col s12 m12 l2">
                <i className="fa fa-link"></i>
              </div>
              <div className="custom-content col s12 m12 l10 wow fadeIn a1 achievements-content">

                <h2>Links</h2>
                <a href="https://www.linkedin.com/in/mayank-mahajan-b1b79121/" target="_blank"><i className='fa fa-external-link'></i>LinkedIn Profile</a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default App;
