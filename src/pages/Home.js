// src/pages/Home.js
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import db from '../db';
import ContactList from '../components/ContactList';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

function Home() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
           
            console.log('Firestore DB:', db);

            try {
              
                const q = query(collection(db, "contacts"), orderBy("lastName"));
                const querySnapshot = await getDocs(q);
                setContacts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => `, doc.data());
                });
            } catch (error) {
                console.error('Error fetching contacts from Firestore:', error);
            }
        };

        fetchContacts();
    }, []);

    const filteredContacts = contacts.filter(contact =>
        contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Contact Book</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContactList contacts={filteredContacts} />
            <Link to="/add" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                borderRadius: '4px',
                backgroundColor: '#007BFF',
                color: 'white',
                textDecoration: 'none'
            }}>
                Add New Contact
            </Link>
        </div>
    );
}

export default Home;
