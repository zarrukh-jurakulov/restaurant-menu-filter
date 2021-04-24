import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchInput = (props) => {
    return (
        
        <div className='searchItems'>
            
            <FaSearch className='searchIcon' />
            <input type='search' placeholder='Search...' onChange={props.onChange} value={props.value} />
        </div>
    )
}

export default SearchInput