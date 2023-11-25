type Props = {
  image: {
    default: string;
    hover: string;
  };
  altText: string;
};

function ProductImage({ image, altText }: Props) {
  return (
    <div className="w-full relative">
      <img
        src={image.default}
        alt={altText}
        className="w-full z-20 h-full transition-all ease-in-out"
      />
      <img
        src={image.hover}
        alt={altText}
        className="w-full absolute top-0 left-0 z-10 h-full transition-all duration-300 ease-in-out opacity-0 hover:opacity-100"
      />
    </div>
  );
}

export default ProductImage;
