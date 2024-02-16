import { useState } from 'react';

function Searchbar({ initialSearchTerm = '', onSearch = () => {} }) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Searchbar;
