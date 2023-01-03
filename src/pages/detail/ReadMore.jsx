import React from 'react'
import { useState } from 'react'

const ReadMore = ({ children }) => {
    const [isMore, setIsMore] = useState(false)
    const toggleBtn = () => {
        setIsMore((prev) => !prev)
    }
    return (
        <>
            <div className="read-more-read-less w-[38%] mt-3">
                <div className='overflow-hidden' style={{ maxHeight: isMore ? undefined : "60px" }}>
                    <p className='text-[#A9A9AC]'>Description: <span className='text-white'>{children} </span></p>
                </div>
                <button className='text-[#00dc5a] font-bold mt-1 flex items-center' onClick={toggleBtn} >
                    <span>
                        {isMore ? 'Collapse' : 'More'}
                    </span>
                    <svg transform={isMore ? 'scale(1,-1)' : undefined} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default ReadMore