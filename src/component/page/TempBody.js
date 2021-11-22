import React from "react";
import {useSelector} from "react-redux";
import Spiner from "../Loading/Spiner";
import CartTemp from "../CartTemp";

export const TempBody = () => {

    const {data, loading} = useSelector(state => state.temp)

    return (
        <>
            {loading? <Spiner /> : data.map((item) => <CartTemp key={item.id} temp={item} />).sort((prev, next) => next.key - prev.key)}
        </>
    )
}