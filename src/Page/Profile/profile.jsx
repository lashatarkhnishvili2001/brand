import React from 'react'

const profile = () => {
    let user = null
    if(localStorage.hasOwnProperty('user')) {
        user = JSON.parse(localStorage.getItem('user'))
    }
    return (
        <div>
            {user ? user.email : 'Anonymous'}
        </div>
    ) 
}

export default profile