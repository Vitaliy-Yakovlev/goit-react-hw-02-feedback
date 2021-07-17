import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

const StatisticsFeedback = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <h2 className={s.title}>Statistics</h2>

    {total > 0 ? (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>

        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

StatisticsFeedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default StatisticsFeedback;
