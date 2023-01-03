import React from 'react'

const myArray = [
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 1",
        img: "/assets/2.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 2",
        img: "/assets/3.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 3",
        img: "/assets/4.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 4",
        img: "/assets/5.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 5",
        img: "/assets/6.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 6",
        img: "/assets/7.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 7",
        img: "/assets/8.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 8",
        img: "/assets/9.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 9",
        img: "/assets/10.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 10",
        img: "/assets/11.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 11",
        img: "/assets/12.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 12",
        img: "/assets/13.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 13",
        img: "/assets/14.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 14",
        img: "/assets/15.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 15",
        img: "/assets/16.jpg"
    },
    {
        name: "BORUTO-NARUTO NEXT GENERATIONS",
        episodes: "Episode 16",
        img: "/assets/17.jpg"
    },
]
const Episodes = () => {
    return (
        <>
            {/* <button className="mt-8 rounded w-[13%] px-4 py-1 flex text-sm text-black dark:text-white border border-black dark:border-white">
                Episodes 1-24
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline ml-7 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button> */}
            <div className="my-5 grid grid-cols-4 gap-8">
                {
                    myArray.map((value, index) => (
                        <div key={index} className="hover:scale-110 transition-all ease-in duration-300 text-black dark:text-white hover:dark:text-[#00dc5a] hover:text-[#00dc5a] relative item-hover">
                            <button className="flex justify-center items-center">
                                <img
                                    src={value.img}
                                    alt={value.name}
                                    className="relative"
                                />
                            </button>
                            <button>
                                <svg className="hidden absolute right-[15%] bottom-[35%] w-[30px] h-[30px] rounded-[50%] bg-[#00dc5a]" width="60px" height="60px" viewBox="0 0 60 60" version="1.1" ><g id="Btn/Play/Normal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><circle id="bg" fill="#1CC749" cx="30" cy="30" r="30"></circle><path d="M35.7461509,22.4942263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.25 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.7538491,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.662176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z" id="Triangle" fill="#FFFFFF" transform="translate(33.250000, 30.000000) rotate(-270.000000) translate(-33.250000, -30.000000) "></path></g></svg>
                            </button>
                            <p className='font-medium'>{value.name}<br></br>{value.episodes}</p>
                            <button className='absolute right-[12.5%] top-0 text-black border bg-amber-300 px-2 rounded'>vip</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Episodes