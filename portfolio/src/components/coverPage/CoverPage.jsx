import { motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { InView } from "react-intersection-observer";
import "./coverPage.scss";

function CoverPage() {
  return (
    <>
      <div className='coverPage'>
        <div className='container'>
          <div className='left'>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='experience1'
                  ref={ref}
                  initial={{ x: "-100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <ul>
                    <strong>
                      <h2>React Developer</h2>
                    </strong>
                    <p>
                      <b>Raidify Consult</b>
                    </p>
                    <br />

                    <li>
                      Designing and implementing user interfaces for web
                      applications using React components.
                    </li>
                    <li>
                      Collaborating with UX/UI designers to ensure a seamless
                      and visually appealing user experience.
                    </li>
                    <li>
                      Implementing and maintaining a component-based
                      architecture for scalable and maintainable code.
                    </li>
                    <li>
                      Implementing state management solutions such as Redux for
                      larger and more complex applications.
                    </li>
                  </ul>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='textBox2'
                  ref={ref}
                  initial={{ x: "-100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <p>
                    Nov 2019 - Oct 2020
                    <MdKeyboardDoubleArrowRight className='textIcon' />
                  </p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='experience3'
                  ref={ref}
                  initial={{ x: "-100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.6 } } : {}
                  }
                >
                  <ul>
                    <strong>
                      <h2>Comptia A+</h2>
                    </strong>
                    <p>
                      <b>New Horizon</b>
                    </p>
                    <br />

                    <li>
                      Provide technical assistance to end-users, troubleshooting
                      hardware and software issues.
                    </li>
                    <li>Install, configure, and maintain computer systems.</li>
                    <li>
                      Assist in managing and resolving IT service requests.
                    </li>
                    <li>
                      Install, upgrade, and troubleshoot software applications.
                    </li>
                    <li>
                      Provide on-site technical support for hardware and
                      software issues.
                    </li>
                  </ul>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='textBox4'
                  ref={ref}
                  initial={{ x: "-100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <p>
                    May 2017 - Oct 2017
                    <MdKeyboardDoubleArrowRight className='textIcon' />
                  </p>
                </motion.div>
              )}
            </InView>
          </div>

          <div className='line'>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='circle1'
                  ref={ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.1, delay: 0.3 },
                        }
                      : {}
                  }
                  style={{
                    backgroundImage: 'url("/images/raidify.png")',
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='circle2'
                  ref={ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.1, delay: 0.3 },
                        }
                      : {}
                  }
                  style={{
                    backgroundImage: 'url("/images/PEF.jpeg")',
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='circle3'
                  ref={ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.1, delay: 0.3 },
                        }
                      : {}
                  }
                  style={{
                    backgroundImage: 'url("/images/newHorizon.png")',
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='circle4'
                  ref={ref}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.1, delay: 0.3 },
                        }
                      : {}
                  }
                  style={{
                    backgroundImage: 'url("/images/bookingAfrica.jpeg")',
                    backgroundSize: "cover",
                  }}
                ></motion.div>
              )}
            </InView>
          </div>
          <div className='right'>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='textBox1'
                  ref={ref}
                  initial={{ x: "100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <p>
                    <MdKeyboardDoubleArrowLeft className='textIcon' />
                    Nov 2022 - Oct 2023
                  </p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='experience2'
                  ref={ref}
                  initial={{ x: "100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <ul>
                    <strong>
                      <h2>IT Assistant</h2>
                    </strong>
                    <p>
                      <b>PEFMB</b>
                    </p>
                    <br />

                    <li>
                      Enter data accurately into databases or tracking systems.
                    </li>
                    <li>
                      Assist in promoting and ensuring compliance with IT
                      security policies.
                    </li>
                    <li>
                      Provide basic troubleshooting for hardware-related
                      problems, such as printer issues or connectivity problems.
                    </li>
                    <li>
                      Support the IT team in deploying software updates and
                      installations on workstations.
                    </li>
                  </ul>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='textBox3'
                  ref={ref}
                  initial={{ x: "100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.5 } } : {}
                  }
                >
                  <p>
                    <MdKeyboardDoubleArrowLeft className='textIcon' />
                    Aug 2019 - Nov 2019
                  </p>
                </motion.div>
              )}
            </InView>
            <InView triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  className='experience4'
                  ref={ref}
                  initial={{ x: "100%" }}
                  animate={
                    inView ? { x: "0%", transition: { duration: 0.6 } } : {}
                  }
                >
                  <ul>
                    <strong>
                      <h2>Web Designer/Developer</h2>
                    </strong>
                    <p>
                      <b>Booking Africa</b>
                    </p>
                    <br />

                    <li>
                      Creating and implementing the visual elements of a website
                      using markup languages and scripting
                    </li>
                    <li>
                      Ensuring that websites work well on different devices and
                      screen sizes.
                    </li>
                    <li>
                      Designing and implementing the user interface components
                      to enhance user experience.
                    </li>
                  </ul>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverPage;
