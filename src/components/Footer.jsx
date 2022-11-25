import React from "react";

function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-author">
        <address>
          Page created by
          <a href="https://github.com/jkenix" title="Github profile link">
            {" "}
            jkenix
          </a>
        </address>
        <a
          href="https://www.figma.com/file/6kFNHvBorfCJrZ81w9gF82/%D0%9A%D0%B5%D0%BC%D0%B5%D0%BD%D0%B3%D0%B5%D1%80-%2B"
          title="Figma original layout link">
          Copyright © Toy.Stream, Inc.
        </a>
        <a
          href="https://github.com/jkenix/jkenix.github.io/tree/interno"
          title="Github repo">
          Repo link of this page
        </a>
      </div>
    </footer>
  );
}

export default Footer;
