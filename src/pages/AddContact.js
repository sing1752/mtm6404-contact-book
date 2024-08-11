// src/pages/AddContact.js
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import db from '../db';
import ContactForm from '../components/ContactForm';

function AddContact() {
    const [contact, setContact] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "contacts"), contact);
        navigate('/');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Add New Contact</h1>
            <ContactForm contact={contact} setContact={setContact} handleSubmit={handleSubmit} buttonLabel="Add Contact" />
            <Link to="/" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                borderRadius: '4px',
                backgroundColor: '#6c757d',
                color: 'white',
                textDecoration: 'none'
            }}>
                Cancel
            </Link>
        </div>
    );
}

export default AddContact;
