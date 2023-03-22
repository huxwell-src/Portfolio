import { useState } from "react";
import classNames from "classnames";

const PhotoStack = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const getRandomOffset = () => {
    const minOffset = -30;
    const maxOffset = 30;
    return {
      x: Math.floor(Math.random() * (maxOffset - minOffset + 1)) + minOffset,
      y: Math.floor(Math.random() * (maxOffset - minOffset + 1)) + minOffset,
    };
  };

  const getRandomRotation = () => {
    const minDegrees = -17;
    const maxDegrees = 17;
    return (
      Math.floor(Math.random() * (maxDegrees - minDegrees + 1)) + minDegrees
    );
  };

  const zIndexOffset = images.length - currentImageIndex;

  return (
    <div
      className="relative  w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      style={{ top: -currentImageIndex * 2, left: -currentImageIndex * 2 }}
      onClick={handleImageClick}
    >
      {images.map((imageUrl, index) => {
        const isCurrentImage = index === currentImageIndex;
        const offset = getRandomOffset();
        const rotation = getRandomRotation();

        return (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className={classNames(
              "absolute top-0 left-0  border-gray-100 border-8 rounded-lg box-shadow-md transform transition-all duration-300 ease-out ",
              {
                "z-50": isCurrentImage,
                "z-40": !isCurrentImage && index === currentImageIndex - 1,
                "z-30": !isCurrentImage && index === currentImageIndex - 2,
                "z-20": !isCurrentImage && index === currentImageIndex - 3,
                "z-10": !isCurrentImage && index === currentImageIndex - 4,
              }
            )}
            style={{
              opacity: isCurrentImage ? 1 : 0.8,
              transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
              pointerEvents: isCurrentImage ? "auto" : "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default PhotoStack;
