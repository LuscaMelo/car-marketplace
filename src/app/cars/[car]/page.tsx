import { cars } from "@/mocks/cars"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

export default function Page({ params }: { params: { car: string } }) {

    const allCars = cars
    const idCar = allCars.filter(car => car.id == params.car)

    return (
        <div className="p-7 md:p-12">
            {
                idCar.map(car => (
                    <>
                        <h1 className="text-5xl font-bold">{car.name}</h1>
                        <div className="flex items-baseline gap-8 mb-10 mt-2">
                            <h3 className="text-3xl font-bold text-blue-200">{car.type}</h3>
                            <div className="flex items-center">
                                <AiFillStar className='text-yellow-500 text-xl' />
                                <span className='text-lg ml-1 font-semibold'>{car.ratio}</span>
                            </div>
                        </div>
                        <div key={car.id} className="flex flex-col lg:flex-row max-h-[600px]">
                            <Image width={750} height={400} className="w-full object-cover rounded-xl" src={car.image} priority alt={car.name} />
                            <div className="py-10 lg:mt-0 lg:mx-10">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod soluta et porro voluptate. Facere dolor a dicta magnam porro consequatur numquam consequuntur et qui odio! Vero, iste quo. Corrupti.
                                    Numquam quo pariatur voluptate? Deserunt, autem iusto totam similique voluptate aspernatur? Cupiditate, cum velit. Laudantium beatae ipsa necessitatibus dolor nemo eius reiciendis enim iure voluptas, omnis, saepe, qui veniam nisi?
                                    Mollitia odio omnis, magnam nemo quae corrupti fugiat ullam earum ipsa? Ab aut blanditiis maxime non ea voluptatibus, sed cum nam aliquam, perspiciatis corporis incidunt iusto quo suscipit facere accusamus.
                                    Laborum, vitae quam nostrum atque odit in alias, esse tenetur dolores officia repellendus, delectus non illum. Eligendi omnis, corrupti itaque sapiente iure eveniet tenetur dolorem nam fugiat tempora officiis commodi?</p>
                            </div>
                        </div>
                    </>

                ))
            }
        </div>
    )
}