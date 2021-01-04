import React, { useContext } from 'react';
import InputHook from "../Hooks/InputHook";
import { ContactData } from "../Context/ContactData";
import { v1 as uuid } from 'uuid';

const ContactFrom = () => {
    const { dispatch } = useContext(ContactData);
    const [name, setName, reset] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");
    const addNewContact = e => {
        e.preventDefault();
        dispatch({
            type:"ADD_CONTACT",
            newContact:{ id: uuid(), name: name, email: email, phone: phone }
        })
        reset();
        resetEmail();
        resetPhone();
    }
    return (
        <form onSubmit={addNewContact}>
            <div className="form-group">
                <h3>Add Contact</h3>
            </div>
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Enter Name"
                    value={name} onChange={setName} />
            </div>
            <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Enter Email"
                    value={email} onChange={setEmail} />
            </div>

            <div className="form-group">
                <input type="text" name="phone" className="form-control" placeholder="Enter Phone"
                    value={phone} onChange={setPhone} />
            </div>

            <div className="form-group">
                <input type="submit" className="btn btn-info btn-block" value="Sumit" onChange="" />
            </div>
        </form>
    )
}

export default ContactFrom;