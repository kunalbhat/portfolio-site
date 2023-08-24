// React utils
import { Link } from "react-router-dom";

// App components
import { ArticleComponent } from "../Components/ArticleComponent";

export function Home() {
  return (
    <>
      <section className="md:flex md:gap-12 md:mb-6 lg:mb-12">
        <div className="w-full lg:w-2/3 xl:ml-auto xl:pl-8">
          <h1 className="w-5/6">Hi, I'm Kunal and I build product.</h1>
          <p>
            I combine my 15+ years of experience from roles as a designer,
            product manager, and engineer to help teams iterate quickly, find
            product market fit faster, and launch.
          </p>
          <p>
            I've spent the last several years building product in startups to
            large enterprise organizations. My multi-disciplinary background
            allows me to contribute through every touchpoint of the product
            development process.
          </p>
          <p>
            I've worked on some cool things and love sharing my learnings from
            these experiences. Dive in below or{" "}
            <Link to="/about">learn more about me</Link>.
          </p>
        </div>
      </section>

      <section>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <header className="section-header">
            <h2>Case Studies</h2>
            <p>In-depth walkthroughs of extra-large projects.</p>
          </header>
          <Link to="/case-studies/skyteller">
            <ArticleComponent theme="skyteller">
              <h3>Crypto Off-Ramp</h3>
            </ArticleComponent>
          </Link>

          <ArticleComponent theme="braintree">
            <h3>Payments Dashboard</h3>
          </ArticleComponent>
        </div>
      </section>

      <section className="lg:flex">
        <header className="section-header lg:w-1/3">
          <h2>Projects</h2>
          <p>Brief overviews of some cooler projects I've worked on.</p>
        </header>
        <article className="lg:w-2/3 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link to="/case-studies/skyteller">
            <ArticleComponent theme="nftcrawler">
              <h3>NFT Crawler</h3>
            </ArticleComponent>
          </Link>

          <ArticleComponent theme="daowow">
            <h3>DAO Aggregator</h3>
          </ArticleComponent>

          <ArticleComponent theme="other">
            <h3>Something Else</h3>
          </ArticleComponent>
        </article>
      </section>

      <section className="md:flex">
        <header className="section-header md:w-1/3">
          <h2>Experiments</h2>
          <p>Bite-size projects that I've hacked on for fun.</p>
        </header>
        <article className="lg:w-2/3 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ArticleComponent theme="small-block">
            <h3>Freddy</h3>
          </ArticleComponent>

          <ArticleComponent theme="small-block">
            <h3>Puzzle</h3>
          </ArticleComponent>

          <ArticleComponent theme="small-block">
            <h3>Other Thing</h3>
          </ArticleComponent>

          <ArticleComponent theme="small-block">
            <h3>One More Thing</h3>
          </ArticleComponent>
        </article>
      </section>
    </>
  );
}
