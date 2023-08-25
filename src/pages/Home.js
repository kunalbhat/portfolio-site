// React utils
import { Link } from "react-router-dom";
import { animated, useSpring, useInView } from "@react-spring/web";

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

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-5% 0%",
    }
  );

  return (
    <>
      <section className="md:flex md:gap-12 md:mb-6 lg:mb-12">
        <animated.div
          className="w-full lg:w-2/3 xl:ml-auto xl:pl-8"
          style={styles}
        >
          <h1 className="w-5/6">Hi, I'm Kunal and I build products.</h1>
          <p>
            A true end-to-end builder, I combine 15+ years of experience from
            roles as a designer, product manager, and engineer to help teams
            iterate quickly, find product market fit faster, and launch.
          </p>
          <p>
            I specialize in <mark>payments</mark> via previous experience at
            PayPal and Braintree, <mark>contextual commerce</mark> at Modest and
            most recently, <mark>crypto</mark> at Galactic.
          </p>
        </animated.div>
      </section>

      <section className="lg:flex">
        <header className="lg:w-1/3 mb-6">
          <h2>Experience</h2>
        </header>
        <article className="lg:w-2/3 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="case-study-cover galactic">
            <h3>Galactic</h3>
            <p>I designed and built financial products for web3 users.</p>
          </div>
          <div className="case-study-cover paypal col-span-2">
            <h3>PayPal / Braintree</h3>
            <p>
              I managed IAM products, launched a new version of the Braintree
              merchant dashboard, and established a merchant data platform.
            </p>
          </div>
          <div className="case-study-cover modest">
            <h3>Modest</h3>
            <p>I designed and built a contextual commerce platform.</p>
            <small className="my-4">Acquired by PayPal</small>
          </div>
          <div className="case-study-cover dscout">
            <h3>dscout</h3>
            <p>
              I designed and built one of the first iterations of dscout's
              mobile research platform.
            </p>
          </div>
          <div className="case-study-cover gravitytank">
            <h3>gravitytank</h3>
            <p>
              I designed and built prototypes to help large organizations ideate
              quickly.
            </p>
            <small className="my-4">Acquired by Salesforce</small>
          </div>
        </article>
      </section>

      <section className="lg:flex my-12 lg:my-24">
        <header className="lg:w-1/3 mb-6">
          <h2>About Me</h2>
          {/* <div className="overflow-hidden w-48 h-48 rounded-full">
            <img src="../images/kunal-profile.jpg" alt="Kunal profile" />
          </div> */}
        </header>
        <article className="lg:w-2/3">
          <p>
            I've spent my 15+ years career rooted firmly in design. My path has
            taken me from graphic design to interactive design to interaction
            design to product design to product engineering to product
            management.
          </p>

          <p>
            Because of my journey cycling between design, product, and
            engineering, I find it useful to describe the activities that come
            naturally to me, in no particular order:
          </p>
          <ul>
            <li>Building prototypes to bring ideas to life</li>
            <li>Synthesizing qualitative research</li>
            <li>Instrumenting interfaces to collect user metics</li>
            <li>Systems thinking</li>
            <li>Visualizing user flows</li>
            <li>Writing SQL to pull and analyze data</li>
          </ul>
        </article>
      </section>

      <section className="lg:flex my-12 lg:my-24">
        <header className="lg:w-1/3 mb-6">
          <h2>About Me</h2>
          {/* <div className="overflow-hidden w-48 h-48 rounded-full">
            <img src="../images/kunal-profile.jpg" alt="Kunal profile" />
          </div> */}
        </header>
        <article className="lg:w-2/3">
          <p>
            I've spent my 15+ years career rooted firmly in design. My path has
            taken me from graphic design to interactive design to interaction
            design to product design to product engineering to product
            management.
          </p>

          <p>
            Because of my journey cycling between design, product, and
            engineering, I find it useful to describe the activities that come
            naturally to me, in no particular order:
          </p>
          <ul>
            <li>Building prototypes to bring ideas to life</li>
            <li>Synthesizing qualitative research</li>
            <li>Instrumenting interfaces to collect user metics</li>
            <li>Systems thinking</li>
            <li>Visualizing user flows</li>
            <li>Writing SQL to pull and analyze data</li>
          </ul>
        </article>
      </section>
    </>
  );
}
