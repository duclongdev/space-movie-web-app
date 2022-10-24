import React from 'react'

const arrayTypeName = [
    {
        name: "South Korea"
    },
    {
        name: "LGBT"
    },
    {
        name: "Romance"
    },
    {
        name: "Youth"
    },
    {
        name: "School Life"
    },
    {
        name: "Korean"
    },
    {
        name: "Contemporary"
    },
]

const TypeFilm = () => {
    return (
        <>
            <div className="flex mt-2 gap-3">
                {
                    arrayTypeName.map((value, index) => (
                        <p key={index} className="bg-gray-700 rounded px-1 font-normal">{value.name}</p>
                    ))
                }
            </div>
        </>
    )
}

export default TypeFilm