import React from 'react'
import Video from '../../components/video/video'
import LeftShort from '../../components/LeftShort/LeftShort'


const listVideo = [
  {
    id: 1,
    name: "BORUTO NARUTO",
    type: "Kawaki and Himawari vs Hana Sensei",
    srcImg: "/assets/avt.png",
    vid: "/assets/vid.mp4"
  },
  {
    id: 2,
    name: "BORUTO NARUTO",
    type: "Kawaki and Himawari vs Hana Sensei",
    srcImg: "/assets/r1.png",
    vid: "/assets/vid2.mp4"
  }

]

const Shorts = () => {
  return (
    <div className='flex pl-14'>
      <div className='w-3/12 pt-4 abcd'
      >
        <LeftShort />
      </div>
      <div className="w-9/12 pt-16 flex flex-col items-center snap-y snap-mandatory overflow-scroll overflow-x-hidden h-screen">
        {
          listVideo.map((value, index) => (
            <Video
              key={index}
              id={value.id}
              name={value.name}
              srcImg={value.srcImg}
              type={value.type}
              vid={value.vid}
            />
          ))
        }
      </div>
    </div>
  )
}


export default Shorts