import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as solidFaStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularFaStar, } from "@fortawesome/free-regular-svg-icons";


const Rating = ({rating = 1.1, maxRating = 5, className = ''}) => {
  let rounded = Math.round(rating);
  let isNotHalf = rating === rounded
  let listStars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (rounded >= i) {
      listStars.push(solidFaStar);
    } else if (rounded < i && ! isNotHalf) {
      isNotHalf = true;
      listStars.push(faStarHalfAlt);
    } else {
      listStars.push(regularFaStar);
    }
  }

  return (
    <span className={"text-amber-500 flex" + className}>
      {listStars.map((item, key) =>
        <FontAwesomeIcon className="w-5 h-5" key={key} icon={item}/>
      )}
    </span>
  );
};

export default Rating;
