// React utils
import { animated, useSpring } from "@react-spring/web";

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

  // const [ref, springs] = useInView(
  //   () => ({
  //     from: {
  //       opacity: 0,
  //       y: 100,
  //     },
  //     to: {
  //       opacity: 1,
  //       y: 0,
  //     },
  //   }),
  //   {
  //     rootMargin: "-5% 0%",
  //   }
  // );

  function expandSection() {
    console.log("expand!!!");
  }

  return (
    <>
      <section className="md:flex md:gap-12 md:mb-6 lg:mb-12">
        <animated.div className="w-full" style={styles}>
          <h1 className="lg:mx-12">
            Hi, I'm Kunal &ndash; a product design lead in Chicago.
          </h1>
          <p className="lg:mx-12 max-w-3xl">
            With over 16 years of experience building and delivering user
            experiences as a designer, product manager, and software engineer, I
            help companies ideate, test quickly, and find product market fit
            faster.
          </p>
        </animated.div>
      </section>
      <section>
        <header className="section-header">
          <h2>Experience</h2>
        </header>
        <div className="lg:grid grid-cols-3 gap-8">
          <div className="case-study col-span-1" onClick={expandSection}>
            <h3>Galactic</h3>
            <h6>(closed up shop)</h6>
            <p>I built a web3 product for crypto users.</p>
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
      <section>
        <header className="section-header">
          <h2>Some of my favorite things</h2>
        </header>
        <div className="lg:grid grid-cols-4 gap-8">
          <div className="case-study">
            <h3>React</h3>
            <p>I love building useful software.</p>
          </div>
          <div className="case-study">
            <h3>SQL</h3>
            <code>DROP TABLE *</code>
          </div>
          <div className="case-study">
            <h3>Figma</h3>
            <p>My go-to design and prototyping tool.</p>
          </div>
        </div>
      </section>
    </>
  );
}
