"use client"

import Image from 'next/image'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'

interface iProps {
    image: string,
    name: string,
    type: string,
    ratio: number
}

export const SmallCard = (props: iProps) => {

    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className="relative w-[100%] bg-secondary rounded-3xl overflow-hidden h-[280px] cursor-pointer" >
            <div className="absolute top-3 left-3 rounded-full p-2 bg-light cursor-pointer text-xl z-40" onClick={handleLike}>
                {
                    isLiked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />
                }
            </div>
            <Image fill className="w-full object-cover rounded-3xl" src={props.image} alt="volvo ex30 image" />
            <div className='absolute h-full w-full bg-black opacity-0 hover:opacity-80 duration-300 rounded-3xl border-2 border-blue-200'>
                <div className='flex flex-col justify-between p-10 mt-8'>
                    <div className='flex w-full justify-between'>
                        <div>
                            <h4 className='font-bold text-lg text-white'>{props.name}</h4>
                            <p className='font-bold text-blue-300'>{props.type}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <AiFillStar className='text-yellow-500 text-md' />
                            <span className='text-sm ml-1 font-semibold'>{props.ratio}</span>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <button className='py-1 px-4 bg-blue-300 rounded-3xl text-black text-sm font-bold'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
