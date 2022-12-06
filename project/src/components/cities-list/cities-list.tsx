import { SORTING_OPTIONS } from '../../const';
import { useAppDispatch, useAppSelector} from '../../hooks/index';
import { changeCity, changeSorting } from '../../store/action';

type CitiesProps = {
  cities: string[];

}

function CitiesList ({cities}: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li className="locations__item" key = {city}>
                <a className={currentCity === city ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                  href="#/"
                  onClick = {(evt) => {
                    evt.preventDefault();
                    dispatch(changeCity({ city: city }));
                    dispatch(changeSorting({ sorting: SORTING_OPTIONS.Popular}));
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
