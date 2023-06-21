import { cars } from "@/mocks/cars"
import Image from "next/image"
import Link from "next/link"
import { AiFillStar, AiOutlineArrowLeft, AiOutlineCaretRight } from "react-icons/ai"

export default function Page({ params }: { params: { car: string } }) {

    const allCars = cars
    const idCar = allCars.filter(car => car.id == params.car)

    return (
        idCar.map(car => (
            <div key={car.id} className="flex flex-col-reverse xl:flex-row w-[100%]">
                <div className="w-[100%] p-7 xl:pr-20">
                    <div className="flex gap-2 mb-10">
                        <p className="flex items-center underline underline-offset-4 gap-2">
                            <Link href="/">All Cars</Link>
                            <AiOutlineCaretRight />
                        </p>
                        <p>{car.name}</p>
                    </div>
                    <div className='flex w-full justify-between'>
                        <div className="mb-5">
                            <h4 className='font-bold text-3xl text-white'>{car.name}</h4>
                            <p className='font-bold text-lg text-blue-300'>{car.type}</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <AiFillStar className='text-yellow-500 text-lg' />
                            <span className='text-md ml-1 font-semibold'>{car.ratio}</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 border-t-2 border-light pt-7">{car.description}</p>
                    <div className="flex gap-3 mt-8 mb-10">
                        <button className="bg-electric text-secondary font-bold py-3 px-6 rounded-full">Order now</button>
                        <Link href="/">
                            <button className="border-2 border-gray-400 text-gray-200 font-bold py-3 px-6 rounded-full">See our stock</button>
                        </Link>
                    </div>
                </div>
                <div className="w-[100%] h-[50vh] md:h-[40vh] lg:h-[40vh] xl:h-[65vh]">
                    <div className="relative w-full h-full">
                        <Image fill className="w-full object-cover" src={car.thumb} priority alt={car.name} />
                    </div>
                </div>
            </div>
        ))
    )
}