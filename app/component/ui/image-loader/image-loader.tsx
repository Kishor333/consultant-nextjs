"use client";

import { useState, SyntheticEvent } from "react";
import Image, { ImageProps } from "next/image";
import "./image-loader.scss";

export default function ImageLoader(props: ImageProps) {
  const {
    onLoad,
    onError,
    className,
    fill,
    width,
    height,
    style,
    alt,
    ...rest
  } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onError?.(e);
  };

  const imgClassName = [
    "img-loader__img",
    isLoaded ? "is-loaded" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const skeletonClassName = [
    "img-loader__skeleton",
    isLoaded ? "is-loaded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const image = (
    <Image
      {...rest}
      alt={alt}
      {...(fill ? { fill: true } : { width: width!, height: height! })}
      style={style}
      className={imgClassName}
      onLoad={handleLoad}
      onError={handleError}
    />
  );

  if (fill) {
    return (
      <>
        <span className={skeletonClassName} aria-hidden="true" />
        {image}
      </>
    );
  }

  return (
    <span
      className="img-loader__wrap"
      style={{ width, height }}
    >
      <span className={skeletonClassName} aria-hidden="true" />
      {image}
    </span>
  );
}
