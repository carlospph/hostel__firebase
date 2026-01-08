import React from 'react'

const Field = ({ id, label, type, placeholder }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className="border border-gray-300 rounded-md p-2 w-full block bg-white" placeholder={placeholder} />
        </div>
    )
}

export default Field
