import React, { useEffect, useState } from 'react'
import CaseList from '../components/CaseList'
import Search from '../components/Search'

import data from '../data/cases'

const Home = () => {
    const [search, setSearch] = useState('')
    const [cases, setCases] = useState([])
    const [authors, setAuthors] = useState([])
    const [sortBy, setSortBy] = useState(false)

    const getAuthors = (data) => {
        const authors = [...new Set(data.map((x) => x.caseAuthor))]
        setAuthors(authors)
    }

    const inputChangeHandler = (e) => {
        const { value } = e.target
        setSortBy(!sortBy)
        value == 'title' ? sortCasesByTitle(cases) : sortCasesByAuthor(cases)
    }

    const sortCasesByTitle = (data) => {
        function compare(a, b) {
            if (a.caseTitle < b.caseTitle) {
                return -1
            }
            if (a.caseTitle > b.caseTitle) {
                return 1
            }
            return 0
        }

        const sorted = data.sort(compare)
        console.log(sorted)
        setCases(sorted)
    }

    const sortCasesByAuthor = (data) => {
        function compare(a, b) {
            if (a.caseAuthor < b.caseAuthor) {
                return -1
            }
            if (a.caseAuthor > b.caseAuthor) {
                return 1
            }
            return 0
        }

        const sorted = data.sort(compare)
        console.log(sorted)
        setCases(sorted)
    }

    const casesFilter = (search) => {
        const result = cases.filter((e) => {
            return (
                e.caseTitle.toLowerCase().includes(`${search}`.toLowerCase()) ||
                e.caseAuthor.toLowerCase().includes(`${search}`.toLowerCase())
            )
        })
        setCases(result)
    }

    const updateSearch = (data) => {
        setSearch(data)
    }

    useEffect(() => {
        search ? casesFilter(search) : setCases(data)
        getAuthors(data)
    }, [search, sortBy])

    return (
        <>
            <div className='container flex justify-center items-center mx-auto m-0 text-2xl'>
                Home
            </div>
            <div className='mx-auto flex md:flex-row flex-col-reverse'>
                {/* Left Half */}
                <div className='flex flex-col space-y-2 items-start mt-28'>
                    <h4 className='text-3xl text-indigo-400'>Unique Authors</h4>
                    {authors &&
                        authors.map((x, key) => (
                            <div
                                key={key}
                                className='p-1 m-1 text-base drop-shadow shadow shadow-gray-300'
                            >
                                <h1>{x}</h1>
                            </div>
                        ))}
                </div>

                {/* Right Half */}
                {console.log(search)}
                <div className='flex flex-col justify-between container'>
                    <div className='flex items-center justify-end mr-0 m-0 md:mr-20 mt-8'>
                        <Search setSearch={updateSearch} />
                    </div>

                    <div className='text-gray-700 ml-5 mt-2'>
                        Sort By:
                        <div className='mt-2'>
                            <label className='inline-flex items-center'>
                                <input
                                    type='radio'
                                    name='sortCases'
                                    onChange={inputChangeHandler}
                                    value='title'
                                />
                                <span className='ml-2'>Title</span>
                            </label>
                            <label className='inline-flex items-center ml-6'>
                                <input
                                    type='radio'
                                    name='sortCases'
                                    onChange={inputChangeHandler}
                                    value='author'
                                />
                                <span className='ml-2'>Author</span>
                            </label>
                        </div>
                    </div>

                    <div className='flex'>
                        <CaseList data={cases} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
