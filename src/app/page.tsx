import { BigCard } from '@/components/BigCard'
import { SmallCard } from '@/components/SmallCard'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Home() {

  const carFilters: string[] = ['All Cars', 'Electric', 'Gasoline', 'Hybrids']

  return (
    <main className="xl:flex md:w-[88%]">
      <section className="xl:w-[65%] lg:p-12 md:p-8">
        <div className='h-[500px] md:h-[300px] mb-16 md:rounded-3xl bg-[url("../../public/car-banner.jpg")] overflow-hidden bg-cover bg-center'>
          <div className='flex flex-col justify-center h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.85)] lg:to-[transparent] to-[rgba(0,0,0,.35)] pl-5'>
            <h3 className='text-3xl font-bold'>Top Safety Pick</h3>
            <div className='mt-4'>
              <p>Awarded the most 2023</p>
              <p className='mt-1'>IIHS TOP SAFETY PICK+</p>
            </div>
          </div>
        </div>
        <div className='px-7 md:px-0'>
          <h1 className="text-3xl lg:text-6xl font-bold">Find your perfect car</h1>
          <ul className="flex flex-wrap gap-2 mt-10 mb-16 md:mb-0 items-center">
            {carFilters.map((carFilter, index) => (
              <li key={index}>
                <button className="bg-light text-sm md:text-md lg:text-lg p-2 px-8 rounded-full">{carFilter}</button>
              </li>
            ))}
            <li>
              <button className="flex items-center justify-center text-black bg-white lg:w-12 lg:h-12 w-10 h-10 rounded-full">
                <AiOutlinePlus />
              </button>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mt-8 w-full px-7 md:px-0">
          <SmallCard image="volvo-ex30.jpg" name='Volvo EX30' type='Electric' ratio={4.8} />
          <SmallCard image="volvo-xc90.jpg" name='Volvo XC90' type='Gasoline' ratio={4.7} />
          <SmallCard image="volvo-xc60.jpg" name='Volvo XC60' type='Electric' ratio={4.9} />
        </div>
      </section>

      <section className="xl:w-[35%] p-5 py-16 lg:py-12 xl:px-0">
        <BigCard />
      </section>
    </main>
  )
}
