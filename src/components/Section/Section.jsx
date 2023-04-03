import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <div>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
