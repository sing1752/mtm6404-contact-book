// src/components/ContactList.js
import { Link } from 'react-router-dom';

function ContactList({ contacts }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {contacts.map(contact => (
                <li key={contact.id} style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                    <Link to={`/contact/${contact.id}`} style={{ textDecoration: 'none', color: '#007BFF' }}>
                        {contact.firstName} {contact.lastName}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
