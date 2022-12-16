import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as solidFaStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import {faStar as regularFaStar, } from "@fortawesome/free-regular-svg-icons";

export enum RatingSize {
  xs = 'w-2 h-2',
  sm = 'w-3 h-3',
  md = 'w-4 h-4',
}

interface RatingProps {
  size?: RatingSize;
  rating: number;
  maxRating?: number;
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  size = RatingSize.md,
  rating = 0,
  maxRating = 5,
  className
}) => {
  const rounded = Math.floor(rating);
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
    <span className={"text-amber-500 flex " + className} title={String(rating)}>
      {listStars.map((item, key) =>
        <FontAwesomeIcon className={size} key={key} icon={item}/>
      )}
    </span>
  );
};

export default Rating;
