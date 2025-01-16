import { useState } from 'react';

const JobSearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ keyword, location });
  };

  return (
    <form
      onSubmit={handleSearch}
      className='careerForm'
    >
      <input
        type="text"
        placeholder="Enter job title or keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          flex: 1,
          marginRight: '10px',
          padding: '10px',
          fontSize: '16px',
          border: 'none',
        }}
      />
      <input
        type="text"
        placeholder="Enter town, city or county"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          flex: 1,
          marginRight: '10px',
          padding: '10px',
          fontSize: '16px',
          border: 'none',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#FEDC00',
          color: '#121212',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        🔍 Search tech jobs
      </button>
    </form>
  );
};

export default JobSearchBar;
