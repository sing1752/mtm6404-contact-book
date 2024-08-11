// src/components/ContactForm.js
function ContactForm({ contact, setContact, handleSubmit, buttonLabel }) {
    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
                type="text"
                placeholder="First Name"
                value={contact.firstName}
                onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={contact.lastName}
                onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <button type="submit" style={{
                padding: '10px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#007BFF',
                color: 'white',
                cursor: 'pointer'
            }}>
                {buttonLabel}
            </button>
        </form>
    );
}

export default ContactForm;
