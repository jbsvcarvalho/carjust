import React from "react";
import Image from "next/image";
import starts from "../../assets/svg/Star.svg";

const Rating: React.FC<any> = ({
  backgroundColor = "bg-white",
  data,
  border = "rounded",
  ...props
}) => {
  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starStyle =
        i <= rating
          ? "inline-block text-yellow-400"
          : "inline-block text-gray-400";
      stars.push(
        <span key={i} className={starStyle}>
          <Image src={starts} alt="" width={18} height={18} />
        </span>
      );
    }
    return stars;
  }

  return (
    <div className="my-2">
        <button
          className={`flex flex-row justify-between items-center p-2 min-w-[2rem]  ${border} ${backgroundColor} text-gray-600`}
          {...props}
        >
          <span>{renderStars(data)}</span>
      
        </button>
    </div>
  );
};

export default Rating;
