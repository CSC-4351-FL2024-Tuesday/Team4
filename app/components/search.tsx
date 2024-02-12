import React, { useState } from 'react';

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Perform search logic here
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button onClick={() => { /* Perform search logic here */ }}>Search</button>
        </div>
    );
};

export default SearchBar;