import React, { useEffect } from 'react'

const Portfolio = () => {
    useEffect(() => {
        window.location.href = 'https://malik-idrees.github.io/'
    }, [])

    return (
        <div>
            <h2>Loading</h2>
        </div>
    )
}

export default Portfolio
