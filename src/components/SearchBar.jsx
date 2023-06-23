import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 } }}>
      <input className='search-bar' type="text" placeholder="Search" value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} sx={{ border: 'none', outline: 'none', width: '100%', fontSize: 16, py: 1 }} />
      <IconButton type="submit" sx={{ p: '10px', color: 'red', mr: 1 }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar