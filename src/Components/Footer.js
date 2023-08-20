import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container site-footer">
      <p>&copy;{year} Kunal Bhat</p>
      <p>
        Made with <HeartIcon className="w-5 inline" /> in{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React
        </a>
        .
      </p>
    </footer>
  );
};

export { Footer };
