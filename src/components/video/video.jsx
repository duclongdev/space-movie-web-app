import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import Like from '../like/Like'
import Follow from '../follow/Follow'



const Video = ({ srcImg, name, type, id, vid, index }) => {
    const videoRef = useRef()
    const [playing, setPlaying] = useState(false)

    //Click
    const onVideoClick = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };

    //Autoplay
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }
    const isVisibile = useElementOnScreen(options, videoRef)
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true)
            }
        }
        else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false)
            }
        }
    }, [isVisibile])

    return (
        <div key={index} className='max-w[600px] snap-start border-b-2 border-gray-600 border-opacity-30 pb-10 pt-16'>
            <div>
                <div className='flex justify-between relative right-10'>
                    <img className="w-[50px] h-[50px]" src={srcImg} alt="" />
                    <div>
                        <p className="text-xl font-bold hover:underline cursor-pointer dark:text-white">{name}</p>
                        <div className='flex flex-row'>
                            <div className="text-base font-semibold dark:text-white">{type}</div>
                            <img className="w-[25px] h-[25px]" src="/assets/fire.png" alt="" />
                        </div>
                    </div>
                    <Follow />
                </div>
            </div>
            <div className='flex flex-row'>
                <video key={id} src={vid} ref={videoRef} onClick={onVideoClick} controls className='w-[70%] max-h-[700px] ml-[30px] rounded-md mt-4'>
                </video>
                <div className='flex flex-col justify-end ml-7'>
                    <Like />
                    <div className='text-center mb-4'>
                        <div>
                            <FontAwesomeIcon icon={faCommentDots} className="border-2 rounded-full p-2 bg-slate-200 text-2xl" />
                        </div>
                        <span className='dark:text-white font-semibold'>646</span>
                    </div>
                    <div className='text-center'>
                        <div>
                            <FontAwesomeIcon icon={faShare} className="border-2 rounded-full p-2 bg-slate-200 text-2xl" />
                        </div>
                        <span className='dark:text-white font-semibold'>182</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState()
    const callbackFunction = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }
    const optionsMemo = useMemo(() => {
        return options
    }, [options])
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const currentTarget = targetRef.current
        if (currentTarget) observer.observe(currentTarget)

        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }
    }, [targetRef, optionsMemo])
    return isVisibile
}

export default Video