// src/components/SearchBar.js
function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
        />
    );
}

export default SearchBar;
