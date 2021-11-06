import React from "react";
import logo from '../img/logo.png'

export default function Nav({count, handleChange, handleSubmit, loading}) {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light mb-3 text-center">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
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
                        <li className="nav-item">
                            <button className="btn btn-outline-success disabled">Главная</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success mx-2 disabled">18B20</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success disabled">BME280</button>
                        </li>
                    </ul>
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                        <div className="col-auto mr-2" style={{width: 215}}>
                            <select className="form-select" id="autoSizingSelect" onChange={handleChange}>
                                <option value={count}>количество значений</option>
                                <option value={15}>15</option>
                                <option value={30}>30</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                                <option value={200}>200</option>
                                <option value={400}>400</option>
                                <option value={800}>800</option>
                                <option value={1600}>1600</option>
                                <option value={3200}>3200</option>
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