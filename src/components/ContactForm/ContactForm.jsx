import React from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function ContactForm({handleContactForm}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const addContact = (e) => {
        e.preventDefault();
        const data = {};
        data.id = nanoid();
        data.name = name;
        data.number = number;
        handleContactForm(data);
        e.target.reset();
    }
    
    const handleInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break
            case 'number':
                setNumber(e.target.value);
                break
            default:
                return
        }
    }
        return (
            <form className={css.form} onSubmit={addContact} >
                <label className={css.label}>Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onInput={handleInput}
                    />
                </label>
                <label className={css.label}>Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onInput={handleInput}
                    />
                </label>
                <button className={css.button}>Add contact</button>
            </form>
        )
}