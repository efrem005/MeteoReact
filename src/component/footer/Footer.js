import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {handlerDecrement, handlerIncrement} from '../../store/tempSlice'

const Footer = () => {

    const {page, totalPage} = useSelector(state => state.temp)
    const dispatch = useDispatch()

    const a = () => dispatch(handlerDecrement())
    const b = () => dispatch(handlerIncrement())

    return (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button disabled={page === 1 ?  true : ""} type="button" className="btn btn-outline-success" onClick={a}>назад</button>
            <button disabled={page === totalPage ? true : ""} type="button" className="btn btn-outline-success" onClick={b}>вперед</button>
        </div>
    )
}

export default Footer