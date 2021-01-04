import React, { useContext } from 'react';
import { ContactData } from '../Context/ContactData';

const ContactDetails = ({ user }) => {
    const { dispatch } = useContext(ContactData);
    return (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button onClick={() => dispatch({ type: 'REMOVE_CONTACT', id: user.id })}
                className="btn btn-danger">Delete</button></td>
        </>
    );
}

export default ContactDetails;