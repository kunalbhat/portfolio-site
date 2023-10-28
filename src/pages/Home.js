// React utils
import { animated, useSpring } from "@react-spring/web";

import { ReactComponent as SkytellerLogo } from "./skyteller-logo-white.svg";

export function Home() {
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
    console.log("expand!!!");
  }

  const tagsList = [
    "SQL",
    "React",
    "Figma",
    "ProtoPie",
    "Miro",
    "VSCode",
    "Mixpanel",
    "Looker",
    "User research",
    "User testing",
    "Firebase",
    "Design systems",
    "Systems thinking",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
  ];

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const shuffledList = shuffle(tagsList);

  return (
    <>
      <section className="content-container md:flex md:gap-12 mt-0 md:mb-6 lg:mb-12">
        <animated.div className="w-full" style={styles}>
          <h1 className="lg:mx-12">
            Hi, I'm Kunal &ndash; a product design lead in Chicago.
          </h1>
          <p className="lg:mx-12 lg:max-w-4xl">
            I have 16 years of building and delivering user experiences in roles
            as a designer, product manager, and software engineer. I'm a systems
            thinker, technically oriented, and highly comfortable in new and
            ambiguous problem areas.
          </p>
        </animated.div>
      </section>
      <div className="section-divider" />
      <section className="content-container -mt-12">
        <header className="section-header">
          <h2>Experience</h2>
        </header>
        <div className="lg:grid grid-cols-3 gap-8">
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>Galactic</h3>
            <h6>(RIP crypto, closed up shop)</h6>
            <p>I built financial products for web3 users.</p>
          </div>
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>PayPal / Braintree</h3>
            <p>
              I managed IAM products, launched a new version of the Braintree
              merchant dashboard, and established a merchant data platform.
            </p>
          </div>
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>Modest</h3>
            <h6>(acquired by PayPal)</h6>
            <p>I designed and built a contextual commerce platform.</p>
          </div>
          <div className="case-study lg:col-span-1" onClick={expandSection}>
            <h3>dscout</h3>
            <p>
              I designed and built the first iterations of dscout's mobile
              research platform.
            </p>
          </div>
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>gravitytank</h3>
            <h6>(acquired by Salesforce)</h6>
            <p>
              I designed and built prototypes to help large organizations ideate
              quickly.
            </p>
          </div>
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>VSA</h3>
            <p>
              I built design systems and corporate literature for the world's
              top brands.
            </p>
          </div>
        </div>
      </section>
      <section className="content-container">
        <header className="section-header">
          <h2>Projects</h2>
          {/* <p>A few larger case studies to showcase that I'm most proud of.</p> */}
        </header>
        <div className="md:grid grid-flow-row gap-16 grid-cols-5">
          <aside className="skyteller-cover mb-8 md:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-indigo-950 items-center justify-center h-96">
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
            <a href="/" className="button mt-8 -ml-2">
              Read on
            </a>
          </article>
        </div>
      </section>
      <section className="content-container">
        <div className="flex flex-col-reverse md:grid md:grid-flow-row md:gap-16 md:grid-cols-5">
          <article className="col-span-2 flex flex-col justify-center">
            <h3>Braintree Control Panel</h3>
            <h5>Braintree / PayPal</h5>
            <p className="text-base mb-0">
              I managed the redesign and rebuild of Braintree's control panel
              &ndash; the primary tool Braintree merchants use to manage their
              payments.
            </p>
            <a href="/" className="button mt-8 -ml-2">
              Read on
            </a>
          </article>
          <aside className="braintree-cover mb-8 md:mb-0 flex col-span-3 shadow-xl rounded-2xl bg-white items-center justify-center h-80 md:h-96">
            <p>Test</p>
          </aside>
        </div>
      </section>
      <div className="section-divider"></div>
      <section className="content-container">
        <header className="section-header">
          <h2>About Me</h2>
          <p>
            Here are some tools and activities that I am highly comfortable with
            and have used regularly in my work.
          </p>
        </header>

        <ul className="grid tags-list">
          {shuffledList.map((key, value) => {
            return <li>{key}</li>;
          })}
        </ul>
      </section>
    </>
  );
}
