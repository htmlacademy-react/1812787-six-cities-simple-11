import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';

const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

type AddCommentProps = {
  hotelId: number;
}

function AddCommentForm ({hotelId}: AddCommentProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSending, setSending] = useState(false);
  const [userReview, setUserReview] = useState({
    rating: 0,
    review: '',
  });

  const dataChangeHandle = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setUserReview({ ...userReview, [name]: value });
  };

  const handlePostReview = (evt: MouseEvent<HTMLElement>) => {
    setSending(true);
    evt.preventDefault();
    const { rating, review } = userReview;
    dispatch(postReview({
      hotelId: hotelId,
      comment: review,
      rating: rating}
    ));
    setUserReview({
      rating: 0,
      review: ''
    });
    setSending(false);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((rating, i) =>
          (
            <React.Fragment key={`${RATINGS.length - i}-stars`}>
              <input className="form__rating-input visually-hidden" name="rating" value={RATINGS.length - i} id={`${RATINGS.length - i}-stars`} type="radio"
                checked={userReview.rating.toString() === (RATINGS.length - i).toString()}
                disabled={isSending}
                onChange={dataChangeHandle}
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
        onChange={dataChangeHandle}
        value={userReview.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={userReview.rating > 0 && userReview.review.length >= 50 && userReview.review.length <= 300 ? undefined : true}
          onClick={(evt) => {
            handlePostReview(evt);
          }}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default AddCommentForm;
