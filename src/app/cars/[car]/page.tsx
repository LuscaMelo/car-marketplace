import { cars } from "@/mocks/cars"
import Image from "next/image"
import Link from "next/link"
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai"

export default function Page({ params }: { params: { car: string } }) {

    const allCars = cars
    const idCar = allCars.filter(car => car.id == params.car)

    return (
        <div className="md:p-12 md:w-[88%]">
            {
                idCar.map(car => (
                    <>
                        <div className="py-5 px-7">
                            <Link href="/">
                                <button className="flex items-center gap-2 mb-10 cursor-pointer bg-electric rounded px-4 py-1 font-bold text-black">
                                    <AiOutlineArrowLeft />
                                    <span>All cars </span>
                                </button>
                            </Link>
                            <h1 className="text-4xl font-bold">{car.name}</h1>
                            <div className="flex items-center gap-10 mt-2">
                                <h3 className="text-2xl font-bold text-blue-200">{car.type}</h3>
                                <div className="flex items-center">
                                    <AiFillStar className='text-yellow-500 text-xl' />
                                    <span className='text-lg ml-1 font-semibold'>{car.ratio}</span>
                                </div>
                            </div>
                        </div>
                        <div key={car.id} className="flex flex-col lg:flex-row">
                            <Image width={600} height={600} className="w-full object-cover" src={car.image} priority alt={car.name} />
                            <div className="py-10 px-7 lg:py-0 lg:mt-0 lg:mx-10">
                                <h5 className="text-3xl font-bold">Overview</h5>
                                <p className="text-sm mt-5 mb-10">{car.description}</p>
                                <Link href="/">
                                    <button className='bg-electric px-14 md:px-16 py-2 rounded-full text-secondary text-lg font-bold'>
                                        Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>

                ))
            }
        </div>
    )
}