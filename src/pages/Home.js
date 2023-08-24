// React utils
import { Link } from "react-router-dom";
import { animated, useSpring, useInView } from "@react-spring/web";

// App components
import { ArticleComponent } from "../Components/ArticleComponent";

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
            I combine 15+ years of experience from roles as a designer, product
            manager, and engineer to help teams iterate quickly, find product
            market fit faster, and launch. I am a true end-to-end builder.
          </p>
          <p>
            I specialize in <mark>payments</mark> via previous experience at
            PayPal and Braintree, <mark>contextual commerce</mark> at Modest and
            most recently, <mark>crypto</mark> at Galactic.
          </p>
          <p>
            I've worked on some cool things and love sharing my learnings from
            these experiences. Dive in below or{" "}
            <Link to="/about">learn more about me</Link>.
          </p>
        </animated.div>
      </section>

      <section className="lg:flex">
        <header className="lg:w-1/3 mb-6">
          <h2>Experience</h2>
        </header>
        <article className="lg:w-2/3 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="case-study-cover galactic">
            <h3>General Galactic Corporation</h3>
            <p>I built financial products for crypto users.</p>
            <p></p>
          </div>
          <div className="case-study-cover paypal col-span-2">
            <h3>PayPal / Braintree</h3>
          </div>
          <div className="case-study-cover modest">
            <h3>Modest</h3>
          </div>
          <div className="case-study-cover dscout">
            <h3>dscout</h3>
          </div>
          <div className="case-study-cover gravitytank">
            <h3>gravitytank</h3>
          </div>
        </article>
      </section>
    </>
  );
}
