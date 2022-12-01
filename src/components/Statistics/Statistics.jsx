import PropTypes from 'prop-types';
import css from './Statistics.module.scss';

export const Statistics = ({
  statistic: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2 className={css.statistics__title}> Statistics</h2>
      <ul className={css.statistics__list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
