import React from 'react'

const SearchBar = () => {
  return (
    <div className='mt-6 px-8 sm:px-24 md:px-48 lg:px-92'>
       <input 
                type="text" 
                placeholder="Enter a game to search" 
                className="bg-zinc-100 dark:bg-gray-800 text-gray-400 dark:text-gray-100 px-4 py-2 w-full rounded-lg outline-none border-2 border-zinc-100 dark:border-gray-800 focus:border-indigo-500  dark:focus:border-purple-600"
              />
    </div>
  )
}

export default SearchBar