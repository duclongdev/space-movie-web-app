import React from 'react'
import { useState } from 'react'

const Follow = () => {
    const [follow, setFollow] = useState(false)
    return (
        <div>
            <button className='h-8 pl-4 pr-4 rounded-md font-bold w-[100px]'
                onClick={() => setFollow(!follow)}
                style=
                {
                    !follow
                        ?
                        {
                            color: "red", border: "2px solid red", transition: "all 0.5s"
                        }
                        :
                        {
                            color: "#FF6347", border: "2px solid #D3D3D3", transition: "all 0.5s"
                        }
                }
            >
                {!follow ? "Follow" : "Following"}
            </button>
        </div>

    )
}

export default Follow