
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import db from '../db';

function ContactDetails() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
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

    const handleDelete = async () => {
        await deleteDoc(doc(db, "contacts", id));
        navigate('/');
    };

    if (!contact) return <div>Loading...</div>;

    return (
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>Email: {contact.email}</p>
            <Link to={`/edit/${id}`}>Edit Contact</Link>
            <button onClick={handleDelete}>Delete Contact</button>
            <Link to="/">Back to Contact List</Link>
        </div>
    );
}

export default ContactDetails;
