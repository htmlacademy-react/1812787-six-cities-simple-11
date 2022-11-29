import React from 'react';
import type { Review } from '../../types/hotels';
import ReviewItem from '../../components/review-item/review-item';

type Reviews = {
  reviews: Review[];
}

function ReviewsList ( props: Reviews): JSX.Element {
  const {reviews} = props;
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <li className="reviews__item" key={review.id}>
              <ReviewItem review = { review } />
            </li>
          ))
        }
      </ul>
    </React.Fragment>
  );
}

export default ReviewsList;
