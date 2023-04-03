import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onAddFeedback }) => (
  <div>
    {options.map(value => (
      <button type="button" value={value} onClick={onAddFeedback}>
        {value.replace(value[0], value[0].toUpperCase())}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onAddFeedback: PropTypes.func.isRequired,
};
