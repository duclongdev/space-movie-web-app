import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Like = () => {
    const [like, setLike] = useState(false)

    return (
        <div className='text-center mb-4'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon icon={faHeart} className="border-2 rounded-full p-2 bg-slate-200 text-2xl cursor-pointer"
                    onClick={() => setLike(!like)}
                    style={
                        !like
                            ?
                            {
                                color: "black", transition: "all 0.5s"
                            }
                            :
                            {
                                color: "#F44336", transition: "all 0.5s"
                            }
                    }
                />
            </div>
            <span className='dark:text-white font-semibold'>69k</span>
        </div>
    )
}

export default Like