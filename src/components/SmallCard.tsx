"use client"

import { useState } from 'react'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const SmallCard = (props: { image: string, name: string, type: string, ratio: number }) => {

    const [like, setLike] = useState(Boolean)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className="relative w-[100%] bg-secondary rounded-3xl overflow-hidden" >
            <div className="absolute top-2 left-2 rounded-full p-2 bg-light cursor-pointer text-lg z-40" onClick={handleLike}>
                {
                    like ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />
                }
            </div>
            <img className="w-full h-[200px] object-cover rounded-3xl hover:scale-[1.03] duration-300" src={props.image} alt="volvo ex30 image" />
            <div className="flex justify-between items-end p-4 py-8">
                <div>
                    <h4 className='font-bold text-lg'>{props.name}</h4>
                    <p className='font-bold text-blue-300'>{props.type}</p>
                </div>
                <div className="flex items-center">
                    <AiFillStar className='text-yellow-500 text-md' />
                    <span className='text-sm ml-1 font-semibold'>{props.ratio}</span>
                </div>
            </div>
        </div>
    )
}
