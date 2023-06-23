"use client"

import { createContext, useState } from "react"
import { cars } from "@/mocks/cars"

export const CarsContext = createContext([])

export const CarsProvider = ({ children }) => {
    const [carList, setCarList] = useState(cars)

    const filterCars = (e, carFilter) => {
        const carsFiltered = cars.filter(car => car.type == carFilter)
        if (carsFiltered.length == 0) {
            setCarList(cars)
        } else {
            setCarList(carsFiltered)
        }

        const allBtns = document.getElementsByClassName('active')

        for (let btn of allBtns) {
            btn.classList.remove("active");
        }
        e.target.classList.add('active')
    }

    const setFavorite = (id) => {
        const favoriteCar = carList.filter((car) => car.id == id)
        favoriteCar[0].favorite = !favoriteCar[0].favorite
    }

    return (
        <CarsContext.Provider value={{ carList, filterCars, setFavorite }}>{children}</CarsContext.Provider>
    )
}