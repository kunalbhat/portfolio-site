// React utils
import { animated, useSpring } from "@react-spring/web";

import { useState, useEffect } from "react";

import { ReactComponent as SkytellerLogo } from "./skyteller-logo-white.svg";

export function Home() {
  const [expanded, setExpanded] = useState(false);

  const styles = useSpring({
    from: {
      opacity: 0,
      y: 10,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  function expandSection() {
    setExpanded(!expanded);
  }

  useEffect(() => {
    console.log("Expanded?", expanded);
  }, [expanded]);

  const tagsList = [
    "SQL",
    "APIs",
    "React",
    "Figma",
    "ProtoPie",
    "Miro",
    "VSCode",
    "Mixpanel",
    "Looker",
    "User research",
    "User testing",
    "Research analysis",
    "Firebase",
    "Design systems",
    "Systems thinking",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Information architecture",
    "Heuristics",
    "Git",
    "Figjam",
    "Journey mapping",
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  return (
    <>
      <section className="content-container md:flex md:gap-12 mt-0 md:mb-6 lg:mb-12">
        <animated.div className="w-full" style={styles}>
          <h1 className="lg:mx-12">
            Hi, I'm Kunal &ndash; a fullstack product designer in Chicago.
          </h1>
          <h3 className="lg:mx-12 lg:max-w-3xl leading-relaxed font-normal">
            I combine 15+ years of building and delivering excellent experiences
            in roles as a product designer, product manager, and frontend
            engineer. I'm a systems thinker, technically oriented, and highly
            comfortable in new and ambiguous problem spaces.
          </h3>
        </animated.div>
      </section>
      <div className="section-divider -mt-6" />
      <section className="content-container mt-6">
        <header className="section-header">
          <h2>Experience</h2>
        </header>
        <div className="lg:grid grid-cols-3 gap-8">
          <div className="case-study magic transition-all col-span-1">
            <h3>Magic+Might</h3>
            <h6>Design Director</h6>
            <p>
              We make strategy tangible through inspired products and services.
            </p>
          </div>
          <div className="case-study galactic transition-all col-span-1">
            <h3>Galactic</h3>
            <h6>Product Design Engineer</h6>
            <p>I built financial products for web3 users.</p>
            <h6>(RIP crypto, closed up shop)</h6>
          </div>
          <div className="case-study paypal col-span-1" onClick={expandSection}>
            <h3>PayPal / Braintree</h3>
            <h6>Senior Technical Product Manager</h6>
            <p>
              I managed IAM products, launched a new version of the Braintree
              merchant dashboard, and established a merchant data platform.
            </p>
          </div>
          <div className="case-study modest col-span-1" onClick={expandSection}>
            <h3>Modest</h3>
            <h6>Design Engineer, 2014&ndash;2015</h6>
            <p>I designed and built a contextual commerce platform.</p>
            <h6>(acquired by PayPal)</h6>
          </div>
          <div
            className="case-study dscout lg:col-span-1"
            onClick={expandSection}
          >
            <h3>dscout</h3>
            <h6>Product Designer, 2012&ndash;2014</h6>
            <p>
              I designed and built the first major iterations of dscout's user
              research platform.
            </p>
          </div>
          <div
            className="case-study gravitytank col-span-1"
            onClick={expandSection}
          >
            <h3>gravitytank</h3>
            <h6>Interaction Design Lead</h6>
            <p>
              I designed and built prototypes to help large organizations ideate
              quickly.
            </p>
            <h6>(acquired by Salesforce)</h6>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
      <section className="content-container">
        <header className="section-header">
          <h2>Projects</h2>
        </header>
        <div className="lg:grid grid-flow-row gap-16 grid-cols-5">
          <aside
            className={`skyteller-cover mx-auto w-full mb-8 lg:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-indigo-950 items-center justify-center h-96 ${
              expanded ? "focus" : ""
            }`}
            onClick={expandSection}
          >
            <SkytellerLogo />
          </aside>
          <article className="col-span-2 flex flex-col justify-center">
            <h3>Skyteller</h3>
            <h5>Galactic</h5>
            <p className="text-base mb-0">
              Skyteller started as a dream to turn crypto into cash in just one
              click, and to make the whole crypto world more accessible and
              user-friendly. We built a bridge to your bank, allowing you to
              off-ramp straight from your wallet or your personal Skyteller
              off-ramp contract.
            </p>
          </article>
        </div>
      </section>
      <section className="content-container">
        <div className="flex flex-col-reverse lg:grid lg:grid-flow-row lg:gap-16 lg:grid-cols-5">
          <article className="col-span-2 flex flex-col justify-center">
            <h3>Braintree Control Panel</h3>
            <h5>Braintree / PayPal</h5>
            <p className="text-base mb-0">
              I managed the redesign and rebuild of Braintree's control panel
              &ndash; the primary tool Braintree merchants use to manage their
              payments.
            </p>
          </article>
          <aside className="braintree-cover mb-8 lg:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-white items-center justify-center h-80 md:h-96"></aside>
        </div>
      </section>
      <div className="section-divider"></div>
      <section className="content-container grid-flow-row grid lg:grid-flow-col lg:grid-cols-3 gap-8 lg:gap-24">
        <div className="col-span-1">
          <div className="flex items-center">
            {/* <img
              src="./images/kunal-profile.jpg"
              alt="Profile"
              className="rounded-full h-24 w-24 mb-4 mr-4 border-4 border-white shadow-xl"
            /> */}
            <h2>About</h2>
          </div>
          <p>
            I started my career in traditional graphic design but my interest in
            technology and building helpful user experiences quickly took my
            career into new and emergent spaces.
          </p>
          <p>
            Design is at the core of my sensibilities, but roles in product
            management and software engineering have helped hone soft and hard
            skills that make me the fullstack product designer I am today.
          </p>
          <p>
            My experience is a mix of building for early stage problem areas and
            for enterprise scale.
          </p>
          <p>
            Aside from design, my interest lie in building{" "}
            <a href="https://www.github.com/kunalbhat" target="_blank">
              small, helpful apps
            </a>
            , solving puzzles, tennis, soccer, and biking around Chicago. I also
            spend a lot of time attempting to dream up a daily word game that
            the NYT purchases for a modest amount of money some day.
          </p>
        </div>
        <div className="col-span-1">
          <h2>Resume</h2>
          <p>A more detailed account of my career.</p>
          <dl>
            <dt>Magic+Might</dt>
            <dd>
              Design Director
              <br />
              2023 &ndash; Present
            </dd>
            <dt>Galactic</dt>
            <dd>
              Product Design Engineer
              <br />
              2021 &ndash; 2023
            </dd>
            <dt>PayPal / Braintree</dt>
            <dd>
              Senior Technical Product Manager (L25)
              <br />
              Product Manager (L24)
              <br />
              Product Design Engineer (L24)
              <br />
              2015 &ndash; 2021
            </dd>
            <dt>Modest</dt>
            <i>acquired by PayPal</i>
            <dd>
              Product Design Engineer
              <br />
              2014 &ndash; 2015
            </dd>
            <dt>dscout</dt>
            <i>as part of gravitytank</i>
            <dd>
              Product Designer
              <br />
              2012 &ndash; 2014
            </dd>
            <dt>gravitytank</dt>
            <dd>
              Interaction Design Lead
              <br />
              2010 &ndash; 2012
            </dd>
            <dt>VSA Partners</dt>
            <dd>
              Interactive Designer
              <br />
              2009 &ndash; 2010
              <br />
              Designer
              <br />
              2007 &ndash; 2008
            </dd>
          </dl>
        </div>
        <div className="col-span-1">
          <h2>How I Work</h2>
          <p>
            Tools and activities I'm highly comfortable with and use regularly
            in my work.
          </p>
          <ul className="grid tags-list">
            {shuffledList.map((value, key) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
