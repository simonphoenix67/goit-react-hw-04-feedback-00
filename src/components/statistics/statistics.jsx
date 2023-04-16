

import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsCounter}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


