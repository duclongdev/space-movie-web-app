import React from 'react'

const SeeMore = ({callback, isMore}) => {
    return (
        <>
            <button className='text-green-500 font-bold pt-4 flex' onClick={()=>callback(!isMore)}>
                <span>
                    {
                        isMore ? "See Less" : "See All"
                    }
                </span>
                <svg transform={isMore ? 'scale(1,-1)' : undefined} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </>
    )
}

export default SeeMore