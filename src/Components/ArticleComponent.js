const ArticleComponent = ({ children, theme, ...props }) => {
  return <article className={`case-study-cover ${theme}`}>{children}</article>;
};

export { ArticleComponent };
