import { useState } from "react"
import Episodes from "./Episodes"
import "./index.css"
import Recommended from "./Recommended"
import HighLights from "./HighLights"

const Rows = () => {
    const [tab, setTab] = useState(0)

    return (
        <>
            <div>
                <div className="my-8 text-gray-300  border-b-2 border-gray-500 pb-8 relative flex gap-8">
                    <button onClick={() => setTab(0)} className={"relative" + (tab === 0 ? " item-click text-white font-bold" : "")}>Highlights</button>
                    {/* <button onClick={() => setTab(1)} className={"relative" + (tab === 1 ? " item-click text-white font-bold" : "")} >Recommended</button> */}
                    <button onClick={() => setTab(1)} className={"relative" + (tab === 1 ? " item-click text-white font-bold" : "")} >Episodes</button>
                </div>
                <div>
                    {
                        tab === 0
                        &&
                        <Recommended />
                    }
                    {/* {
                        tab === 1
                        &&
                        <HighLights />
                    } */}
                    {
                        tab === 1
                        &&
                        <Episodes />
                    }
                </div>
            </div>
        </>
    )
}

export default Rows
