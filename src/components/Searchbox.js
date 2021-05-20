import { useState } from 'react';

const Searchbox = ({ initialSearch, handleSubmit }) => {
    const [searchTerm, setSearchTerm] = useState(initialSearch);

    return (
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search for any term..."
            />
        </form>
    )
};

export default Searchbox;