import React from 'react';
import classNames from "classnames";

interface Reviews {
  reviews?: object[];
}

const Reviews: React.FC<Reviews> = ({
  reviews,
}) => {
  return (
    <div >

      <div className="mb-10">
        <h2 className="text-xl font-bold pb-6">Отзывы о товаре</h2>

        {reviews
          ?
            reviews.map((review, key) => (
                <p key={key} className="text-sm">{review.description}</p>
            ))
          :
            <p className="text-sm text-center text-muted">Отзывы отсутсвуют</p>
        }

      </div>
    </div>
  );
};

export default Reviews;
