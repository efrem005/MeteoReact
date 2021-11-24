import React from "react";
import {useSelector} from "react-redux";
import Spiner from "../Loading/Spiner";
import CartTemp from "../CartTemp";
import Footer from "../footer/Footer";

export const TempBody = () => {

    const {data, newData, loading} = useSelector(state => state.temp)

    return (
        <>
            {loading? <Spiner /> : newData.map((item) => <CartTemp key={item.id} temp={item} />).sort((prev, next) => next.key - prev.key)}
            <div className="col-12 text-center">
                {data.length > 15 ? <Footer /> : ''}
            </div>
        </>
    )
}