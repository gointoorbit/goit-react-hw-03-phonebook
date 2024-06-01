import css from './AddContactForm.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const nameId = nanoid();
const numberId = nanoid();

export const AddContactForm = ({ onChange, onSubmit, value }) => {
  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label htmlFor={nameId} className={css.contactFormLabel}>
        Name
      </label>
      <input
        id={nameId}
        className={css.contactFormInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value.name}
        onChange={onChange}
      ></input>
      <label htmlFor={numberId} className={css.contactFormLabel}>
        Number
      </label>
      <input
        id={numberId}
        className={css.contactFormInput}
        type="tel"
        name="number"
        pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
        title="Phone number must be digits and can contain spaces, dashes and must start with +"
        required
        value={value.number}
        onChange={onChange}
      ></input>
      <button type="submit" className={css.contactFormButton}>
        Add contact
      </button>
    </form>
  );
};

AddContactForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
