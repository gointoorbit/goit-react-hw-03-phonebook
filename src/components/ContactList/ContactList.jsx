import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => {
  return (
    <>
      <ul className={css.contactList}>{children}</ul>
    </>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};
