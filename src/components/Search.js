import React from 'react'

const Search = ({ setSearch }) => {
    const changeHandler = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div className='flex space-x-3'>
            <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                onChange={changeHandler}
                placeholder='Search cases'
            />
            <button className='px-6 py-2 text-white rounded-full bg-slate-900 focus:outline-none'>
                Go
            </button>
        </div>
    )
}

export default Search
