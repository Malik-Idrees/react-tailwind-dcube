import React from 'react'

const Card = ({ caseAuthor, caseTitle }) => {
    return (
        <div className='border border-gray-200 p-6 rounded-lg w-92 min-w-full'>
            <div className='w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='w-6 h-6'
                    viewBox='0 0 24 24'
                >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                </svg>
            </div>
            <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>{caseAuthor}</h2>
            <p className='leading-relaxed text-base'>{caseTitle}</p>
        </div>
    )
}

export default Card
