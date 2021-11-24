import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTemp} from "../store/tempSlice"
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'

export const Nav = () => {

    const [number, setNumber] = useState()
    const {count, loading} = useSelector(state => state.temp)
    const dispatch = useDispatch()

    const addCount = (e) => {
        e.preventDefault()
        dispatch(fetchTemp({count: number}))
    }

    const addSetNumber = (event) => setNumber(+event.target.value)

    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light mb-3 text-center">
            <div className="container-fluid">
                <a className="navbar-brand" href="/MeteoReact">
                    <img style={{height: 50}} src={logo} alt="метеоСтанция"/></a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item my-1 my-lg-0">
                            <Link className="btn btn-outline-success" to="/MeteoReact">История</Link>
                        </li>
                        <li className="nav-item my-1 my-lg-0">
                            <Link className="btn btn-outline-success mx-2" to="/MeteoReact/Grafic">График</Link>
                        </li>
                        <li className="nav-item my-1 my-lg-0">
                            <Link className="btn btn-outline-success" to="/MeteoReact/dallas">18B20</Link>
                        </li>
                    </ul>
                    <form onSubmit={addCount} className="d-flex justify-content-center">
                        <div className="col-auto mr-2" style={{width: 215}}>
                            <select className="form-select" id="autoSizingSelect" onChange={addSetNumber}>
                                <option value={count}>количество значений</option>
                                <option value={15}>15</option>
                                <option value={30}>30</option>
                                <option value={45}>45</option>
                                <option value={60}>60</option>
                                <option value={120}>120</option>
                                <option value={240}>240</option>
                                <option value={480}>480</option>
                                <option value={960}>960</option>
                                <option value={1920}>1920</option>
                                <option value={3840}>3840</option>
                                <option value={7680}>7680</option>
                            </select>
                        </div>
                        <button className={loading?"btn btn-outline-success mybtn disabled":"btn btn-outline-success mybtn"} type="submit">
                            вывод
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Nav