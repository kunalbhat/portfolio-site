export function About() {
  return (
    <>
      <section className="lg:w-2/3 lg:ml-auto">
        <h1>About</h1>
        <p>
          Hi, I'm Kunal. I've spent my entire 15+ years career rooted firmly in
          design. My path has taken me from graphic design to interactive design
          to interaction design to product design to product engineering to
          product management. Yeesh!
        </p>
      </section>

      <section className="flex">
        <div className="lg:w-1/3 text-right">
          <h3>My Process</h3>
        </div>
        <div className="lg:w-2/3">
          <p>
            Because of my varied journey cycling between design, product, and
            engineering, I find it more useful to describe the activities and
            functions that come very naturally to me, in no particular order:
          </p>
          <ul>
            <li>Building prototypes to bring ideas to life</li>
            <li>Synthesizing qualitative research</li>
            <li>Instrumenting interfaces to collect user metics</li>
            <li>Systems thinking</li>
            <li>Visualizing user flows</li>
            <li>Writing SQL to pull and analyze data</li>
          </ul>
        </div>
      </section>

      <section className="flex">
        <div className="lg:w-1/3 text-right">
          <h3 className="p-6">My Tools</h3>
        </div>
        <div className="lg:w-2/3">
          <p>
            Here are some of the tools and technologies I am well versed in.
          </p>
          <ul>
            <li>React.js</li>
            <li>Tailwind</li>
            <li>Firebase and Firestore</li>
            <li>Figma or Miro</li>
            <li>JIRA</li>
          </ul>
        </div>
      </section>
    </>
  );
}
