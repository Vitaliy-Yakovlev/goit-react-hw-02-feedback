import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {Object.keys(options).map(option => (
        <li className={s.item} key={option}>
          <button className={s.btn} type="button" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
