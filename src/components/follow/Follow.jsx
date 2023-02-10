import React from 'react'
import { useState } from 'react'

const Follow = () => {
    const [follow, setFollow] = useState(false)
    return (
        <div className='relative left-24'>
            <button className='h-8 pl-4 pr-4 rounded-md font-semibold w-[100px] text-[#F44336] hover:bg-gray-900'
                onClick={() => setFollow(!follow)}
                style=
                {
                    !follow
                        ?
                        {
                            color: "#04DB41", border: "2px solid #04DB41", transition: "all 0.5s"
                        }
                        :
                        {
                            color: "#fff", background: "#252525", transition: "all 0.5s"
                        }
                }
            >
                {!follow ? "Follow" : "Following"}
            </button>
        </div>

    )
}

export default Follow