import React, { useState, createContext, useReducer, useEffect } from 'react';
import { ContactReducer } from '../Reducers/ContactReducers';

export const ContactData = createContext();

const ContactDataProvider = props => {
    const [contacts, dispatch] = useReducer(ContactReducer, [], () => {
        const localData = localStorage.getItem('contacts');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    return (
        <ContactData.Provider value={{ users: contacts, dispatch }}>{props.children}</ContactData.Provider>
    );
}

export default ContactDataProvider;