import React, { useEffect } from 'react'

function Github() {
    useEffect(() => {
        window.location.href = 'https://github.com/Malik-Idrees'
    }, [])

    return (
        <div>
            <h2>Github</h2>
        </div>
    )
}

export default Github
