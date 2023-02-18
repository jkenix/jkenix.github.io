import React from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "./config/lazyload";

// Only initialize it one time for the entire application
if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
}

export default class LazyImage extends React.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    const { alt, src, width, height } = this.props;
    return (
      <img
        alt={alt}
        className="lazy"
        data-src={src}
        width={width}
        height={height}
      />
    );
  }
}