import React from 'react'
import { AiFillHome, AiOutlineUser, AiOutlineHeart, AiOutlineSetting } from 'react-icons/ai'

export const Sidebar = () => {

    const icons = [<AiFillHome key={1} />, <AiOutlineUser key={2} />, <AiOutlineHeart key={3} />, <AiOutlineSetting key={4} />]

    return (
        <div className='flex items-center justify-end md:justify-center pr-6 md:pr-0 h-full w-full text-2xl z-10'>
            <ul className='flex md:flex-col gap-1 md:gap-7 text-gray-400'>
                {icons.map((icon, index) => (
                    <li key={index} className='hover:bg-gray-600 hover:text-gray-100 p-2 rounded-xl cursor-pointer md:duration-300'>
                        {icon}
                    </li>
                ))}
            </ul>

        </div>
    )
}
