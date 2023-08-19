import "./App.css";

import { ArticleComponent } from "./Components/ArticleComponent";

import { EyeIcon } from "@heroicons/react/24/solid";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

function App() {
  const year = new Date().getFullYear();

  return (
    <div className="app-container container mt-8">
      <section className="md:flex md:gap-12 md:mb-6 lg:mb-12">
        <div className="w-full lg:w-4/6">
          <h1>Hi, I'm Kunal and I build product.</h1>
          <p>
            I combine my 15+ years of experience from roles as a designer,
            product manager, and engineer to help teams iterate quickly, find
            product market fit faster, and launch.
          </p>
          <p>
            I've spent the last several years building product in startups all
            the way to large enterprise organizations. My multi-disciplinary
            background allows me to contribute through every touchpoint of the
            product development process.
          </p>
          <p>
            I've worked on some cool things and love sharing my learnings from
            these experiences.
          </p>
        </div>
      </section>

      <h2 className="mb-6 border-b-4 border-black w-fit">Case Studies</h2>

      <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ArticleComponent theme="skyteller">
          <EyeIcon className="icon" />
          <h3>Crypto Off-Ramp</h3>
        </ArticleComponent>

        <ArticleComponent theme="braintree">
          <ComputerDesktopIcon className="icon" />
          <h3>Merchant Dashboard Rebuild</h3>
        </ArticleComponent>

        <ArticleComponent>
          <EyeIcon className="icon" />
          <h3>Merchant Data Platform</h3>
        </ArticleComponent>
      </section>

      <h2 className="mb-6">Experiments</h2>

      <section className="md:grid md:grid-cols-3 lg:grid-cols-6 gap-8">
        <ArticleComponent theme="small-block">
          <h3>Freddy</h3>
        </ArticleComponent>

        <ArticleComponent theme="small-block">
          <h3>Puzzle</h3>
        </ArticleComponent>

        <ArticleComponent theme="small-block">
          <h3>Other Thing</h3>
        </ArticleComponent>
      </section>

      <footer className="container my-12">
        <p>&copy;{year} Kunal Bhat</p>
      </footer>
    </div>
  );
}

export default App;
