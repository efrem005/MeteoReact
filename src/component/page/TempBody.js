import React from "react";
import {useSelector} from "react-redux";
import Spiner from "../Loading/Spiner";
import CartTemp from "../CartTemp";

export const TempBody = () => {

    const {newData, loading} = useSelector(state => state.temp)

    return (
        <>
            {loading? <Spiner /> : newData.map((item) => <CartTemp key={item.id} temp={item} />).sort((prev, next) => next.key - prev.key)}
        </>
    )
}