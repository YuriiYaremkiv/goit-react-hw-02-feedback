import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return keys.map(key => {
    return (
      <button
        className={css.button}
        key={key}
        onClick={onLeaveFeedback}
        name={key}
      >
        {key}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
