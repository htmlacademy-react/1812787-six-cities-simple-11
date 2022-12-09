import { useState, memo } from 'react';
import { useAppDispatch } from '../../hooks';
import { SORTING_OPTIONS } from '../../const';
import { changeSorting } from '../../store/action';

type SortingOptionsProps = {
  sorting: string;
}

function SortingOptions ({sorting}: SortingOptionsProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick = {() => setIsOpened(true)}>
        {sorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isOpened ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}
        onMouseLeave={() => setIsOpened(false)}
      >
        {Object.values(SORTING_OPTIONS).map((option) => (
          <li
            className={ sorting === option ? 'places__option places__option--active' : 'places__option'}
            tabIndex={0}
            key={option}
            onClick = {() => {
              setIsOpened(false);
              dispatch(changeSorting({sorting: option}));
            }}
          >{option}
          </li>
        )
        )}
      </ul>
    </form>
  );}

export default memo(
  SortingOptions,
  (prevProps, nextProps) => prevProps.sorting === nextProps.sorting
);
