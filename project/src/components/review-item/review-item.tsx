import React from 'react';
import type { Review } from '../../types/hotels';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem ( props : ReviewItemProps ): JSX.Element {
  const { review } = props;
  return(
    <React.Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${((Math.round(review.rating) / 5) * 100).toString()}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
      </div>
    </React.Fragment>

  );
}

export default ReviewItem;
