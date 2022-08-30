import NextImage, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  src: string;
  alt?: string;
}

const CustomImage = (props: CustomImageProps) => {
  const { src, alt, layout, ...rest } = props;
  return src ? (
    <NextImage src={src} alt={alt || ""} layout={layout} {...rest} />
  ) : null;
};

export default CustomImage;
