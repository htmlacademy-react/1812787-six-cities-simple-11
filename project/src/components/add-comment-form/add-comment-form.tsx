import React, { useState } from 'react';

const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

function AddCommentForm (): JSX.Element {
  const [userReview, setUserReview] = useState({
    rating: 0,
    reviewText: '',
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating, i) =>
          (
            <React.Fragment key={`${RATINGS.length - i}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={RATINGS.length - i} id={`${RATINGS.length - i}-stars`} type="radio"
                checked={userReview.rating === (RATINGS.length - i)}
                onChange={(event) => {
                  const value = Number(event.currentTarget.value);
                  setUserReview({...userReview, rating: value});
                }}
              />
              <label htmlFor={`${RATINGS.length - i}-stars`} className="reviews__rating-label form__rating-label" title={rating}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          )
        )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(event) => {
          const value = event.target.value;
          setUserReview({...userReview, reviewText: value});
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default AddCommentForm;
