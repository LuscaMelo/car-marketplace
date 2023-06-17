"use client"

import React, { useState } from 'react'
import { AiFillHome, AiOutlineUser, AiOutlineHeart, AiOutlineSetting, AiFillHeart } from 'react-icons/ai'
import FavoriteContext from '@/contexts/FavoriteContext'
import { useContext } from 'react'

export const Sidebar = () => {

    const { isFavorite, handleLike } = useContext(FavoriteContext)

    return (
        <div className='flex items-center justify-end md:justify-center pr-6 md:pr-0 h-full w-full text-2xl z-10'>
            <ul className='flex md:flex-col gap-1 md:gap-7 text-gray-400'>
                <li className='hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl cursor-pointer md:duration-300'>
                    <AiFillHome />
                </li>
                <li className='hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl cursor-pointer md:duration-300'>
                    <AiOutlineUser />
                </li>
                <li className='hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl cursor-pointer md:duration-300' onClick={handleLike}>
                    {
                        isFavorite ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />
                    }
                </li>
                <li className='hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl cursor-pointer md:duration-300'>
                    <AiOutlineSetting />
                </li>
            </ul>

        </div>
    )
}
