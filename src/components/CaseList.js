import React from 'react'
import Card from './Card'

const CardList = ({ data }) => {
    return (
        <section className='text-gray-600 body-font mx-auto'>
            <div className=' px-5 py-10 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {data.map((x, key) => (
                        <div key={x.id} className='xl:w-1/3 md:w-1/2 p-4'>
                            <div className=''>
                                <Card caseAuthor={x.caseAuthor} caseTitle={x.caseTitle} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardList
