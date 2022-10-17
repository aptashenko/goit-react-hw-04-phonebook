import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import ContactItem from "./ContactItem/ContactItem";

import { useState, useEffect } from "react";

export default function App() {

  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  )

  const [filter, setFilter] = useState('');

  const handleContactForm = (data) => {
    const isContactExist = contacts.some(({name}) => name === data.name);
    if (isContactExist) {
      alert(`${data.name} is alredy in contacts`);
    } else {
      setContacts(s => [...s, data]);
    }
  }

  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  }

  const filteredContacts = contacts.filter(({name}) => name.toLowerCase().includes(filter));

  const deleteContact = (deleteId) => {
    const newContacts = contacts.filter(({id}) => id !== deleteId)
    setContacts(newContacts);
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
    return (
      <div className="wrapper">
        <Title title='PhoneBook'>
          <ContactForm handleContactForm={handleContactForm} />
        </Title>
        <Title title='Contacts'>
          <Filter onChange={handleFilter} />
          <ContactList>
            <ContactItem contacts={filteredContacts} deleteContact={deleteContact} />
          </ContactList>
        </Title>
      </div>
    )
}
