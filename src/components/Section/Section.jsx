import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{children}</p>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
