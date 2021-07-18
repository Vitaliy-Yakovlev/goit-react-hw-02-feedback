import React from 'react';
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
      <div className={s.container}>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>

        <p className={s.desc}>Positive feedback: {positivePercentage}%</p>
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
