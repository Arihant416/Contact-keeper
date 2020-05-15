import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Arihant Jain',
                email: 'Arihant@gmail.com',
                phone: '111-111-1111',
                type: 'personal',
            },
            {
                id: 2,
                name: 'Aryan',
                email: 'Aryan@gmail.com',
                phone: '111-211-1111',
                type: 'personal',
            },
            {
                id: 3,
                name: 'Rishab Jain',
                email: 'Rishab@gmail.com',
                phone: '111-131-1111',
                type: 'professional',
            },
        ],
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact

    //Delete Contact

    //Set Current Contact

    //CLear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
