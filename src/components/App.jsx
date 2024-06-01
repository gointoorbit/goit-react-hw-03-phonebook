import { useState, useEffect } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { ContactListItem } from './ContactListItem/ContactListItem.jsx';
import { SearchFilter } from './SearchFilter/SearchFilter.jsx';
import { nanoid } from 'nanoid';

export const App = () => {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));

  const state = {
    contacts: savedContacts || [],
    filter: '',
    name: '',
    number: '',
  };
  const [userData, setUserData] = useState(state);

  const onChange = event => {
    const { name, value } = event.target;

    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = event => {
    event.preventDefault();

    const { contacts, name, number } = userData;

    const duplicativeContact = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (duplicativeContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setUserData({
      contacts: [...contacts, { id: nanoid(), name, number }],
      filter: '',
      name: '',
      number: '',
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(userData.contacts));
  }, [userData.contacts]);

  const filteredUserData = userData.contacts.filter(contact =>
    contact.name.toLowerCase().includes(userData.filter.toLowerCase())
  );

  const onDelete = event => {
    const dataToLeave = userData.contacts.filter(
      contact =>
        !contact.id.toLowerCase().includes(event.target.id.toLowerCase())
    );
    setUserData(prev => ({
      ...prev,
      contacts: dataToLeave,
    }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm
        onChange={onChange}
        onSubmit={onSubmit}
        value={userData}
      />
      <h2>Contacts</h2>
      <SearchFilter onChange={onChange} value={userData} />
      <ContactList>
        {filteredUserData.map(contact => (
          <ContactListItem contact={contact} onClick={onDelete} />
        ))}
      </ContactList>
    </>
  );
};
