import getConfig from "next/config";
import NextImage, { ImageProps } from "next/image";

const { publicRuntimeConfig } = getConfig();
const { basePath } = publicRuntimeConfig;

const handleSrc = (src: ImageProps["src"]) => {
  if (typeof src === "string") {
    return `${basePath}${src}`;
  }

  const hasDefault = "default" in src;
  if (hasDefault) {
    return { ...src, src: `${basePath}${src.default.src}` };
  }

  return { ...src, src: `${basePath}${src.src}` };
};

export const Image = ({ src, ...props }: ImageProps) => {
  return <NextImage src={handleSrc(src)} {...props} />;
};
