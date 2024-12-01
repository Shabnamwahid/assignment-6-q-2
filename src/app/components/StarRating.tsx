

import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating=0 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="stars flex gap-1">
      {stars.map((filled, index) => (
        <FaStar
          key={index}
          className={`text-xl ${filled ? 'text-black' : 'text-black'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;


//  <div className="flex justify-start mb-2 pl-7">
// {Array.from({ length: testimonial.rating }).map((_, i) => (
// /  <span key={i} className="w-5 h-5 text-[#000000]">
//     ★
//   </span>
// ))}
