import React from 'react'

function Search({searchTerm,handleSearch}) {
    
  return (
    <div>
        <label htmlFor="search">Search: </label>
        <input type="text" placeholder="Search" value={searchTerm} 
        onChange={handleSearch}  />
    </div>
  )
}

export default Search