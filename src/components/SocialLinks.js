import React from "react";
import "./SocialLinks.css";
const SocialLinks = (props) => {
  let containerClassName = "SocialLinks";
  if (props.center) {
    containerClassName += " center";
  }
  let logoClassName = "SocialLinks__logo";
  if (props.large) {
    logoClassName += " large";
  }
  if (props.left) {
    containerClassName += " left"
  }
  return (
    <div className={containerClassName}>
      <a
        href="http://www.facebook.com/pages/Casey-Trees/58793928339"
        target="_blank" rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 10 20"
          xmlns="http://www.w3.org/2000/svg"
          className={logoClassName}
        >
          <path d="M2.094 6.538H0v3.42h2.094V20h4.028V9.914h2.81l.3-3.376H6.12V4.615c0-.796.16-1.11.93-1.11h2.18V0H6.44C3.445 0 2.094 1.32 2.094 3.846v2.692z" />
        </svg>
      </a>{" "}
      <a href="http://twitter.com/caseytrees" target="_blank" rel="noopener noreferrer">
        <svg
          viewBox="0 0 21 17"
          xmlns="http://www.w3.org/2000/svg"
          className={logoClassName}
        >
          <path d="M20.45 1.924c-.736.326-1.527.547-2.357.646.848-.508 1.498-1.312 1.805-2.27-.793.47-1.67.812-2.606.996C16.542.498 15.477 0 14.297 0 11.647 0 9.7 2.472 10.3 5.038 6.89 4.868 3.866 3.233 1.842.75c-1.074 1.846-.557 4.26 1.27 5.48-.672-.022-1.305-.207-1.858-.514-.045 1.9 1.318 3.68 3.29 4.075-.577.16-1.21.196-1.852.07.522 1.634 2.037 2.82 3.833 2.85C4.8 14.066 2.627 14.67.45 14.41c1.816 1.164 3.973 1.844 6.29 1.844 7.618 0 11.922-6.435 11.663-12.206.8-.578 1.497-1.3 2.047-2.124z" />
        </svg>
      </a>{" "}
      <a href="http://instagram.com/CaseyTrees" target="_blank" rel="noopener noreferrer">
        <svg
          viewBox="0 0 18 17"
          xmlns="http://www.w3.org/2000/svg"
          className={logoClassName}
        >
          <path d="M15.71 7.192h-1.482c.108.418.172.856.172 1.308 0 2.89-2.342 5.23-5.23 5.23-2.89 0-5.23-2.34-5.23-5.23 0-.452.063-.89.17-1.308H2.63v7.192c0 .36.294.654.655.654h11.77c.36 0 .653-.293.653-.654V7.192zm0-4.577c0-.36-.294-.654-.656-.654h-1.96c-.362 0-.655.297-.655.658V4.58c0 .36.29.653.65.653h1.96c.363 0 .656-.292.656-.653V2.614zM9.17 5.23C7.364 5.23 5.9 6.695 5.9 8.5s1.464 3.27 3.27 3.27c1.805 0 3.27-1.465 3.27-3.27 0-1.806-1.465-3.27-3.27-3.27zM15.71 17H2.63c-1.08 0-1.96-.878-1.96-1.962V1.96C.67.88 1.548 0 2.63 0h13.08c1.084 0 1.962.878 1.962 1.96v13.08c0 1.084-.878 1.962-1.96 1.962z" />
        </svg>
      </a>{" "}
      <a href="http://www.youtube.com/caseytrees" target="_blank" rel="noopener noreferrer">
        <svg
          viewBox="0 0 26 17"
          xmlns="http://www.w3.org/2000/svg"
          className={logoClassName}
        >
          <path d="M25.412 3.85c-.39-3.084-1.7-3.51-4.307-3.675C17.398-.06 9.122-.06 5.412.175 2.805.343 1.495.766 1.106 3.85c-.29 2.288-.29 6.194 0 8.49.39 3.083 1.7 3.508 4.306 3.674 3.71.235 11.986.235 15.693 0 2.608-.166 3.918-.59 4.307-3.673.29-2.287.29-6.193 0-8.49zm-14.617 7.466V4.88l6.618 3.22-6.618 3.216z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
