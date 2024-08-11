// src/pages/EditContact.js
import { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useNavigate, useParams, Link } from 'react-router-dom';
import db from '../db';
import ContactForm from '../components/ContactForm';

function EditContact() {
    const { id } = useParams();
    const [contact, setContact] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchContact = async () => {
            const docRef = doc(db, "contacts", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setContact(docSnap.data());
            } else {
                console.error("No such document!");
            }
        };
        fetchContact();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "contacts", id);
        await updateDoc(docRef, contact);
        navigate(`/contact/${id}`);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Edit Contact</h1>
            <ContactForm contact={contact} setContact={setContact} handleSubmit={handleSubmit} buttonLabel="Update Contact" />
            <Link to={`/contact/${id}`} style={{
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

export default EditContact;
