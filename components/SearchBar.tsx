"use client"
import { useState } from 'react'
import { SearchModel } from './'

const SearchBar = () => {
    const [model, setModel] = useState("")
    const handleSearch = () =>{}


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchModel 
                model={model}
                setModel={setModel}
            />
        </div>
    </form>
  )
}

export default SearchBar